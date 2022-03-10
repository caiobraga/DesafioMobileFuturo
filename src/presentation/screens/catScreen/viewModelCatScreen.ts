import {Error} from "../../../utils/error";


export default class ViewModelCatScreen {
  
   url: string;
   isLoading: boolean;
   hasError:boolean;
   error: Error;

  
  constructor(url?: string, isLoading?:boolean, error?:Error ) {
      this.url = url ? url : "https://reactnative.dev/img/tiny_logo.png";
      this.isLoading = isLoading? isLoading : false;
      this.hasError = error? true : false;
      this.error = error? error : new Error("","");
    }
  
  }