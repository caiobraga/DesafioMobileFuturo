import React from 'react';

import { View, Button, Text } from 'react-native';
import CustonTextInput from "../../components/custonTextInput";
import CustonButton from '../../components/custonButton';

const PeopleScreen = (props) => {
 return(
<View style={{ justifyContent: 'center', alignItems: 'center' }}>
<View
      style={{
        flexDirection: 'column',
        height: 100,
        width: "100%",
        padding: 20
      }}
    >
       <CustonTextInput 
  label={"Name"} 
  onChangeText={(text)=>{props.actions.changeNameText(text)}}
  text={props.viewModel.getData().nome} 
  hasError={props.viewModel.hasData()} 
  Error={props.viewModel.getError()} 
  />
   <CustonTextInput 
  label={"Telefone:"} 
  onChangeText={(text)=>{props.actions.changeTelefoneText(text)}}
  text={props.viewModel.getData().telefone} 
  hasError={props.viewModel.hasError()} 
  Error={props.viewModel.getError()} 
  />
   <CustonTextInput 
  label={"Email:"} 
  onChangeText={(text)=>{props.actions.changeEmailText(text)}}
  text={props.viewModel.getData().email} 
  hasError={props.viewModel.hasError()} 
  Error={props.viewModel.getError()} 
  />
<CustonButton pressable={props.viewModel.isLoading()} title={"Mais um!"} onPress={()=>{props.actions.savePeople()}}/>
     
    </View>
</View>
 );
};






export default PeopleScreen;

