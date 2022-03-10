import {Error} from "../../../utils/error";

export default class ViewModelPeopleScreen {
  
   nome: string;
   telefone: string;
   email: string;
   isLoading: boolean;
   hasError: boolean;
   Error: Error;
   isSucess: boolean;
  constructor(nome?: string, telefone?: string, email?: string, isLoading?: boolean, error?: Error, isSucess?:boolean) {
      this.nome = nome ? nome : "";
      this.telefone = telefone ? telefone : "";
      this.email = email ? email : "";
      this.isLoading = isLoading? isLoading : false;
      this.hasError = error? true : false;
      this.Error = error? error : new Error("","");
      this.isSucess = isSucess? isSucess : false;
    }
  
  }