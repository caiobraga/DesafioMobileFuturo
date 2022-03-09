import React from 'react';

import { View, Button, Text } from 'react-native';
import CustonTextInput from "../../components/custonTextInput";
import CustonButton from '../../components/custonButton';
import CustonText from "../../components/custonText";

import  Colors  from '../../UI/colors'

const PeopleScreen = (props) => {

  const color = new Colors('default');
 return(
<View style={{ justifyContent: 'center', alignItems: 'baseline' }}>
<CustonText type={"dis4"}>Pessoa</CustonText>
<View
      style={{
        flexDirection: 'column',
        height: 100,
        width: "100%",
        padding: 20
      }}
    >
  <CustonTextInput 
  label={""} 
  onChangeText={(text)=>{props.actions.changeNameText(text)}}
  text={props.viewModel.getData().nome} 
  error={props.viewModel.hasError()}
  placeholder={"Add text"}
  description={!props.viewModel.hasError()? props.viewModel.getError() : ""}
  title={"Nome:"}
  color={!props.viewModel.hasError()? color.primary : color.danger}
  type={"inputlg"}
  />
   <CustonTextInput 
  label={""} 
  onChangeText={(text)=>{props.actions.changeTelefoneText(text)}}
  text={props.viewModel.getData().telefone} 
  error={props.viewModel.hasError()}
  placeholder={"+55(xx)xxxxx-xxxx"}
  description={!props.viewModel.hasError()? props.viewModel.getError() : ""}
  title={"Telefone:"} 
  color={!props.viewModel.hasError()? color.primary : color.danger}
  type={"inputlg"}
  />
   <CustonTextInput 
  label={""} 
  onChangeText={(text)=>{props.actions.changeEmailText(text)}}
  text={props.viewModel.getData().email}
  error={props.viewModel.hasError()} 
  placeholder={"xxx@xxx.com"}
  description={!props.viewModel.hasError()? props.viewModel.getError() : ""}
  title={"e-mail:"}
  color={!props.viewModel.hasError()? color.primary : color.danger}
  type={"inputlg"}
  />
  {
    props.viewModel.isLoading() ?
    <CustonButton color={new Colors('default').primary } title={"Cadastrar Pessoa"} onPress={()=>{props.actions.savePeople()}}/>
    :
    <CustonButton color={new Colors('disabled').primary } title={"Cadastrar Pessoa"} onPress={()=>{}}/>
  }

     
    </View>
</View>
 );
};






export default PeopleScreen;

