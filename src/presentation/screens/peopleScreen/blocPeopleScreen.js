import React, { useState } from 'react';

import ViewModelPeopleScreen from "./viewModelPeopleScreen"
import  PeopleScreen  from './peopleScreen';
import AsyncSnapshot from '../utils/asyncSnapshot';


const BlocPeopleScreen = () => {

    const [viewModel, setViewModel] = useState(new AsyncSnapshot(new ViewModelPeopleScreen("CAIO","caio","caio"), null));



    class actions{
         changeNameText(text){

        }
    
         changeEmailText(text){
    
        }
    
         changeTelefoneText(text){
    
        }
      }

    
  
    return (<PeopleScreen actions={actions} viewModel={viewModel}/>);
  }

  export default BlocPeopleScreen;

