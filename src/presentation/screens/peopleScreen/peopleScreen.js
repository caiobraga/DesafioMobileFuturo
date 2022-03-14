import React from 'react';

import { View, Button, Text } from 'react-native';
import CustonTextInput from "../../components/custonTextInput";
import CustonButton from '../../components/custonButton';
import CustonText from "../../components/custonText";

import { useTheme } from 'react-native-paper';


import  Colors  from '../../UI/colors'
import Utils from '../../UI/utils';

const PeopleScreen = (props) => {

  const color = new Colors('default');
  const utils = new Utils();
  const { colors } = useTheme();

 return(
<View style={{ backgroundColor: color.accent, justifyContent: 'center', alignItems: 'baseline',   padding: 20 }}>
<CustonText type={'dis4'}>Pessoa</CustonText>
<View
      style={{
        flexDirection: 'column',
        height: 100,
        width: utils.windowWidth,
        padding: 20,
        alignContent:'center',
        alignItems:'center',
        
      }}
    >
  <CustonTextInput 
  label={""} 
  onChangeText={(text)=>{props.actions.changeNameText(text)}}
  text={props.viewModel.nome} 
  error={false}
  placeholder={"Add text"}
  description={props.viewModel.isSucess? "Sucesso!" : ""}
  title={"Nome:"}
  color={props.viewModel.isSucess? color.success : color.primary}
  type={"inputlg"}
  />
   <CustonTextInput 
  label={""} 
  onChangeText={(text)=>{props.actions.changeTelefoneText(text)}}
  text={props.viewModel.telefone} 
  error={props.viewModel.hasError? props.viewModel.Error._codError == "1" ? true : false : false}
  placeholder={"+55(xx)xxxxx-xxxx"}
  description={props.viewModel.hasError? props.viewModel.Error._codError == "1" ? props.viewModel.Error._message : "" : props.viewModel.isSucess? "Sucesso!" : ""}
  title={"Telefone:"} 
  color={!props.viewModel.hasError? props.viewModel.isSucess? color.success : color.primary :  props.viewModel.Error._codError == "1"? color.danger : color.primary}
  type={"inputlg"}
  />
   <CustonTextInput 
  label={""} 
  onChangeText={(text)=>{props.actions.changeEmailText(text)}}
  text={props.viewModel.email}
  error={props.viewModel.hasError? props.viewModel.Error._codError == "2" ? true : false : false} 
  placeholder={"xxx@xxx.com"}
  description={props.viewModel.hasError? props.viewModel.Error._codError == "2" ? props.viewModel.Error._message : "" : props.viewModel.isSucess? "Sucesso!" : ""}
  title={"e-mail:"}
  color={!props.viewModel.hasError? props.viewModel.isSucess? color.success : color.primary : props.viewModel.Error._codError == "2" ? color.danger : color.primary}
  type={"inputlg"}
  />
  {
    !props.viewModel.isLoading ?
    <CustonButton color={colors.primary } title={"Cadastrar Pessoa"} onPress={ ()=>{ props.actions.savePeople()}}/>
    :
    <CustonButton color={colors.disabled } title={"Cadastrar Pessoa"} onPress={()=>{}}/>
  }

     
    </View>
</View>
 );
};






export default PeopleScreen;

