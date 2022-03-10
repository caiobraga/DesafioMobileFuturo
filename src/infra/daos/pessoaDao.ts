import fetch from 'cross-fetch';
import AsyncSnapshot from '../../utils/asyncSnapshot';
import {Error} from '../../utils/error';
export class PessoaDao {
    
    async push(data: string): Promise<any>  {
      const resposta = await fetch("https://pl12133-weatherspot-v1.p.rapidapi.com/db/query.php?l=%3CREQUIRED%3E&pr=%3CREQUIRED%3E&h=%3CREQUIRED%3E&t=%3CREQUIRED%3E&s=%3CREQUIRED%3E", {
        "method": "POST",
        "headers": {
          "x-rapidapi-host": "pl12133-weatherspot-v1.p.rapidapi.com",
          "x-rapidapi-key": "c627748d63msh480ab2d92bf5e3ep152908jsnadcefe0cab20"
        }
      })
      .then( (resposta) => {return resposta}).catch((error)=>{
        return error;
      });

      return resposta;

     }
}