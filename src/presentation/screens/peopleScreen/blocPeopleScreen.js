import React, { useState } from 'react';

import ViewModelPeopleScreen from "./viewModelPeopleScreen"
import  PeopleScreen  from './peopleScreen';


const BlocPeopleScreen = (props) => {

    const [viewModel, setViewModel] = useState(props.viewModel);



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

