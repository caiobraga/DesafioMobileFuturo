import {GatoRepository} from "../../infra/repositories/gatoRepository"
import { Gato } from "../entitys/gato";

class UseCaseGerarGato {
    async action(){
        let gatoRepository = new GatoRepository();

        await gatoRepository.get();

        let gatoModel = gatoRepository.GatoModel;

        if(gatoModel != null){
            let gato = new Gato(gatoModel.getId(), gatoModel.getUrl(), gatoModel.getWidth(), gatoModel.getHeight());
            return gato;
        }else{
            let gato = new Gato();
            return gato;
        }
    }
}