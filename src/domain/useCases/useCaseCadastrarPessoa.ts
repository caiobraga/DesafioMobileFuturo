import {PessoaRepository} from "../../infra/repositories/pessoaRepoditory";
import { PessoaModel } from "../../infra/models/pessoaModel";
import { Pessoa } from "../entitys/pessoa";

import AsyncSnapshot from "../../utils/asyncSnapshot";
import { Error } from "../../utils/error";
export default class UseCaseCadastrarPessoa {

    private nome: string;
    private telefone: string;
    private email: string;

    constructor(nome:string, telefone:string, email:string){
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
    }

    async action(): Promise<AsyncSnapshot>{
        
        let pessoa = new Pessoa(this.nome, this.telefone, this.email);

        let respostaDeError = await !pessoa.isTelefoneValid()? new AsyncSnapshot(null, new Error("Telefone inválido", "1")) : !pessoa.isEmailValid()? new AsyncSnapshot(null, new Error("Email inválido", "2")) : null;


        if(respostaDeError){
            return respostaDeError;
        }

        let pessoaRepository = new PessoaRepository(this.nome, this.telefone, this.email);
        
        let response = await pessoaRepository.push();

        let Result = response!=null? new AsyncSnapshot(response, null) : new AsyncSnapshot(null, new Error("Ocorreu um erro para salvar a pessoa, tente novamente mais tarde", null))
        return Result;
    }
}