/**
 * @format
 */

 import 'react-native';
import { PessoaModel } from '../../../src/infra/models/pessoaModel';



 test('teste PessoaModel declaration and toJson function', async () => {
      

      let pessoaModel = new PessoaModel("caio", "27988860342", "caiotagb@gmail.com" );
      let json = "{\"nome\":\"caio\",\"telefone\":\"27988860342\",\"email\":\"caiotagb@gmail.com\"}";

      expect(pessoaModel.toJson()).toBe(json);
 });

 test('teste PessoaModel getGatoModelFromJson', async () => {
      

  let pessoaModel = new PessoaModel("caio", "27988860342", "caiotagb@gmail.com" );
  
  let pessoaModel2 = pessoaModel.getPessoaModelFromJson(pessoaModel.toJson());

  expect(pessoaModel2.toJson()).toBe("{\"nome\":\"caio\",\"telefone\":\"27988860342\",\"email\":\"caiotagb@gmail.com\"}");
});



