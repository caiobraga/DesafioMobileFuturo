import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

import CustonButton from "../../components/custonButton";
import CustonImage from "../../components/custonImage";
import CustonText from "../../components/custonText";

import Utils from "../../UI/utils";
import  Colors  from '../../UI/colors'

const CatScreen = (props) => {

const utils = new Utils();
const width = utils.windowWidth * 0.9 ;
const height = utils.windowHeight*0.40;
  return (

      <View style={styles.container}>
        <CustonText type={"dis4"}>Gatos</CustonText>
        {
          props.viewModel.isLoading 
          ?
           <CustonImage source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }} width={width} height={height}/>
          :
          <CustonImage source={{
            uri: props.viewModel.url,
          }} width={width} height={height}/>
        }
        <View style={styles.buttonContainer}>
        {
          !props.viewModel.isLoading? <CustonButton color={new Colors('default').primary } title={"Mais um!"} onPress={()=>{props.actions.setAnotherCat()}}/> : 
          <CustonButton color={new Colors('disabled').primary } title={"Mais um!"} onPress={()=>{}}/>
        }
        </View>
      </View>
  );
};

const styles = StyleSheet.create({

container: {
  flexDirection: 'column',
  height: "100%",
  width: "100%",
  padding: 20,
  alignContent: 'center'
},

buttonContainer:{
  padding: 8
}

});




  


export default CatScreen;
