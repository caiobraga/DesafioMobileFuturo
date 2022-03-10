import { PessoaModel } from "../models/pessoaModel"
import { PessoaDao } from "../daos/pessoaDao"
import AsyncSnapshot from "../../utils/asyncSnapshot";
export class PessoaRepository {

    PessoaModel?: PessoaModel;

    constructor(nome: string, telefone: string, email:string){
        this.PessoaModel = new PessoaModel(nome, telefone, email);
    }
    
   async push() : Promise<any> {
        let dao = new PessoaDao();
 
        let response = await dao.push(this.PessoaModel.toJson());
        
        return response;
    }
}