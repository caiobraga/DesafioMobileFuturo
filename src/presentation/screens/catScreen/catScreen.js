import React from 'react';

import { View, Button, Text, StyleSheet, Image } from 'react-native';

import CustonButton from "../../components/custonButton";
import CustonImage from "../../components/custonImage";

const CatScreen = (props) => {
  return (
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
      <CustonImage isLoading={!props.viewModel.isLoading()} hasData={props.viewModel.hasData()} source={{
          uri:  props.viewModel.hasData()? props.viewModel.getData().url : "",
        }
        } />
      <CustonButton pressable={props.viewModel.isLoading()} title={"Mais um!"} onPress={()=>{props.actions.setAnotherCat()}}/>
    <Text>cat</Text>
  </View>
  );
};




  


export default CatScreen;
