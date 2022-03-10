import { PessoaRepository } from "../../../src/infra/repositories/pessoaRepoditory";

test('teste PessoaRepository declaration and post method', async () => {
      

    let pessoaRepoditory = new PessoaRepository("teste","teste","teste");
    let response = await pessoaRepoditory.push()
 
    expect(response!=null).toBe(true);

});
