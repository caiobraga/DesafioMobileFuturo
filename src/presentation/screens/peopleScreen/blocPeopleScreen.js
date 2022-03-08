import React, { useState } from 'react';

import ViewModelPeopleScreen from "./viewModelPeopleScreen"
import  PeopleScreen  from './peopleScreen';
import AsyncSnapshot from '../utils/asyncSnapshot';


const BlocPeopleScreen = () => {

    const [viewModel, setViewModel] = useState(new AsyncSnapshot(new ViewModelPeopleScreen("CAIO","caio","caio"), null));



    class actions{
         changeNameText(text){
          setViewModel(new AsyncSnapshot(new ViewModelPeopleScreen(text,viewModel.getData().telefone,viewModel.getData().email), null, false));
        }
    
         changeEmailText(text){
          setViewModel(new AsyncSnapshot(new ViewModelPeopleScreen(viewModel.getData().nome,viewModel.getData().telefone,text), null, false));
        }
    
         changeTelefoneText(text){
          setViewModel(new AsyncSnapshot(new ViewModelPeopleScreen(viewModel.getData().nome,text,viewModel.getData().email), null, false));
        }
        savePeople(){
          
        }
      }

    
  
    return (<PeopleScreen actions={new actions} viewModel={viewModel}/>);
  }

  export default BlocPeopleScreen;

