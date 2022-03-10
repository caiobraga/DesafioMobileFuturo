import React, { useState } from 'react';

import  CatScreen  from './catScreen';
import ViewModelCatScreen from './viewModelCatScreen';

import UseCaseGerarGato from "../../../domain/useCases/useCaseGerarGato";

import {Error} from "../../../utils/error";

const BlocCatScreen = () => {

    const [viewModel, setViewModel] = useState(new ViewModelCatScreen(null, null, null));


    
    class actions{
      async setAnotherCat(){

        setViewModel(new ViewModelCatScreen(null, true, null));
        let promise = await new UseCaseGerarGato().action();
        console.log(promise);
        if(promise.hasData()){
          setViewModel(new ViewModelCatScreen(promise.getData(), false, null));
        }else{
          if(promise.hasError()){
            setViewModel(new ViewModelCatScreen(null, false, promise.getError() ));
          }else{
            setViewModel(new ViewModelCatScreen(null, false, new Error("Um erro inesperado aconteceu", "") ));
          }
         
        }
      }
    }
    

   
  
    return (<CatScreen actions={new actions()} viewModel={viewModel}/>);
  }

  export default BlocCatScreen;

