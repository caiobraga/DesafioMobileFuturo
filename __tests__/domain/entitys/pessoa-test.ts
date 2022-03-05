/**
 * @format
 */

 import 'react-native';

import { Pessoa } from '../../../src/domain/entitys/pessoa';


 test('teste pessoa entity declaration', async () => {
      

      let pessoa = new Pessoa("caio", "27988860342", "caiotagb@gmail.com" );

      expect(pessoa.getNome()).toBe("caio");
      expect(pessoa.getTelefone()).toBe("27988860342");
      expect(pessoa.getEmail()).toBe("caiotagb@gmail.com");

     

 });

 test('teste função isEmailValid', async () => {
      

     let pessoa = new Pessoa("caio", "27988860342", "caiotagb@gmail.com" );

     expect(pessoa.isEmailValid).toBeTruthy();
 
});

test('teste função isTelefoneValid', async () => {
      

     let pessoa = new Pessoa("caio", "27988860342", "caiotagb@gmail.com" );
     let pessoa2 = new Pessoa("joao", "(27) 988860342", "caiotagb@gmail.com" );
     let pessoa3 = new Pessoa("ricardo", "27 988860342", "caiotagb@gmail.com" );
     let pessoa4 = new Pessoa("aumeida", "27 98886-0342", "caiotagb@gmail.com" );

     expect(pessoa.isTelefoneValid).toBeTruthy();
     expect(pessoa2.isTelefoneValid).toBeTruthy();
     expect(pessoa3.isTelefoneValid).toBeTruthy();
     expect(pessoa4.isTelefoneValid).toBeTruthy();
});
 
