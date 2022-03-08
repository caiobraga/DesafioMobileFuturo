import fetch from 'cross-fetch';

export class GatoDao {
    
    async get(): Promise<any> {
      const resposta = await fetch('https://api.thecatapi.com/v1/images/search')
      .then( (resposta) => {return resposta.json()});

      return resposta;
    }
}