export class GatoDao {
    
    async get(): Promise<any> {
        await fetch('https://api.thecatapi.com/v1/images/search')
      .then( (resposta) => {return resposta.json()});
    }
}