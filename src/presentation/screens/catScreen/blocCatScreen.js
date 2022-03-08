import React, { useState } from 'react';

import  CatScreen  from './catScreen';
import ViewModelCatScreen from './viewModelCatScreen';
import AsyncSnapshot from '../utils/asyncSnapshot';

import UseCaseGerarGato from "../../../domain/useCases/useCaseGerarGato";
import { Error } from '../utils/error';

const BlocCatScreen = () => {

    const [viewModel, setViewModel] = useState(new AsyncSnapshot(null, null, false));


    
    class actions{
      async setAnotherCat(){

        setViewModel(new AsyncSnapshot(null, null, true));

        let gato = await new UseCaseGerarGato().action();
        console.log("gato:" + gato.url);
        if(gato.url != null){
          setViewModel(new AsyncSnapshot(new ViewModelCatScreen(gato.url), null, false));
        }else{
          setViewModel(new AsyncSnapshot(new ViewModelCatScreen(gato.url), new Error("1", "Gato Não encontrado"), false));
        }
      }
    }
    

   
  
    return (<CatScreen actions={new actions} viewModel={viewModel}/>);
  }

  export default BlocCatScreen;

