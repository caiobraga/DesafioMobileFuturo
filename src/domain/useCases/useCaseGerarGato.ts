import {GatoRepository} from "../../infra/repositories/gatoRepository"
import AsyncSnapshot from "../../utils/asyncSnapshot";
import { Error } from "../../utils/error";
import { Gato } from "../entitys/gato";

export default class UseCaseGerarGato {
    async action(): Promise<AsyncSnapshot>{
        let gatoRepository = new GatoRepository();

        await gatoRepository.get();

        let gatoModel = gatoRepository.GatoModel;
        if(gatoModel != null){
            let gato = new Gato(gatoModel.getId(), gatoModel.getUrl(), gatoModel.getWidth(), gatoModel.getHeight());
            return new AsyncSnapshot(gato.getUrl(), null);
        }else{
            return new AsyncSnapshot(null, new Error("Gato não encontrado", "1") );
        }
    }
}