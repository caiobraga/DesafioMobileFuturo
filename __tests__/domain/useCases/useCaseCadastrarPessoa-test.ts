import {GatoRepository} from "../../../src/infra/repositories/gatoRepository"
import { Pessoa } from "../../../src/domain/entitys/pessoa";
import UseCaseCadastrarPessoa from "../../../src/domain/useCases/useCaseCadastrarPessoa";

test('teste useCase cadastrar pessoa declaration', async () => {
      

    let pessoa = await new UseCaseCadastrarPessoa("nome", "telefone", "email@email.com").action();

    
    expect(pessoa.hasError()).toBe(true);

});

test('teste useCase cadastrar erros', async () => {
      

    let pessoa = await new UseCaseCadastrarPessoa("caio", "27988860342", "email@email.com").action();

    expect(pessoa.hasError()).toBe(false);

});
