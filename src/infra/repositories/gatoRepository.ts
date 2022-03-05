import "../daos/gatoDao"
import { GatoModel } from "../models/gatoModel"
import { GatoDao } from "../daos/gatoDao"
export class GatoRepository {

    GatoModel?: GatoModel;

    constructor(){
        
    }
    
   async get() : Promise<GatoModel> {
        let dao = new GatoDao();
        let Json = await dao.get();

        this.GatoModel = new GatoModel().getGatoModelFromJson(Json);

        return this.GatoModel;
    }
}