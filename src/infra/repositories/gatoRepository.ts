import "../daos/gatoDao"
import { GatoModel } from "../models/gatoModel"
import { GatoDao } from "../daos/gatoDao"
import AsyncSnapshot from "../../utils/asyncSnapshot";

export class GatoRepository {

    GatoModel?: GatoModel;

    constructor(){
        
    }
    
   async get() : Promise<any> {

         let dao = new GatoDao();
        let Json = await dao.get();

        this.GatoModel = new GatoModel().getGatoModelFromJson(JSON.stringify(Json[0]));
       
    }
}