import React, { useState } from 'react';

import ViewModelPeopleScreen from "./viewModelPeopleScreen"
import  PeopleScreen  from './peopleScreen';

import UseCaseCadastrarPessoa from '../../../domain/useCases/useCaseCadastrarPessoa';

const BlocPeopleScreen = () => {

    const [viewModel, setViewModel] = useState(new ViewModelPeopleScreen("","","", false, null, null));
    


    class actions{
         changeNameText(text){
          setViewModel(new ViewModelPeopleScreen(text,viewModel.telefone,viewModel.email, false, null, null));
        }
    
         changeEmailText(text){
          setViewModel(new ViewModelPeopleScreen(viewModel.nome,viewModel.telefone, text, false, null, null));
        }
    
         changeTelefoneText(text){
          setViewModel(new ViewModelPeopleScreen(viewModel.nome,text,viewModel.email, false, null, null));
        }

       
        async savePeople(){

          setViewModel(new ViewModelPeopleScreen(viewModel.nome,viewModel.telefone,viewModel.email, true, null, null));


          let promise = await new UseCaseCadastrarPessoa(viewModel.nome, viewModel.telefone, viewModel.email).action();
          
          if(promise.hasError()) setViewModel(new ViewModelPeopleScreen(viewModel.nome,viewModel.telefone,viewModel.email, false, promise.getError(), null));
          if(promise.hasData()) setViewModel(new ViewModelPeopleScreen("","","", false, null, true));
        
        
        }
      }

    return (<PeopleScreen actions={new actions()} viewModel={viewModel}/>);
  }

  export default BlocPeopleScreen;

