import {GatoRepository} from "../../infra/repositories/gatoRepository"
import AsyncSnapshot from "../../utils/asyncSnapshot";
import { Error } from "../../utils/error";
import { Gato } from "../entitys/gato";

export default class UseCaseGerarGato {
    async action(): Promise<AsyncSnapshot>{
        let gatoRepository = new GatoRepository();

        await gatoRepository.get().catch((error)=>{
            return new AsyncSnapshot(null, new Error(error, "2") ); 
        });

        let gatoModel = gatoRepository.GatoModel;
        console.log(gatoModel);
        if(gatoModel == null){
            return new AsyncSnapshot(null, new Error("Gato não encontrado", "1") );
           
        }else{
            let gato = new Gato(gatoModel.getId(), gatoModel.getUrl(), gatoModel.getWidth(), gatoModel.getHeight());
            return new AsyncSnapshot(gato.getUrl(), null);
        }
    }
}