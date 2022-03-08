import React, { useState } from 'react';

import  CatScreen  from './catScreen';
import ViewModelCatScreen from './viewModelCatScreen';




const BlocCatScreen = () => {

    const [viewModel, setViewModel] = useState(new ViewModelCatScreen(""));


    
    class actions{
      setAnotherCat(){
        setViewModel("");
      }
    }
    

   
  
    return (<CatScreen actions={actions} viewModel={viewModel}/>);
  }

  export default BlocCatScreen;

