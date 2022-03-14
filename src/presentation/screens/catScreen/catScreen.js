import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

import { useTheme } from 'react-native-paper';


import CustonButton from "../../components/custonButton";
import CustonImage from "../../components/custonImage";
import CustonText from "../../components/custonText";

import Utils from "../../UI/utils";
const CatScreen = (props) => {

const utils = new Utils();
const width = utils.windowWidth * 0.9 ;
const heightImg = utils.windowHeight *0.40;

const { colors } = useTheme();

const styles = StyleSheet.create({

  container: {
    flexDirection: 'column',
    height: '100%',
    width: width,
    padding: 20,
    alignContent: 'center',
    alignSelf:"baseline",
  },
  
  buttonContainer:{
    padding: 8,
    width: width,
  }
  
  });

  return (

      <View style={{backgroundColor: colors.primary}, styles.container}>
      <CustonText type={'dis4'}>Gato</CustonText>
        {
          props.viewModel.isLoading 
          ?
           <CustonImage source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }} width={width} height={heightImg}/>
          :
          <CustonImage source={{
            uri: props.viewModel.url,
          }} width={width} height={heightImg}/>
        }
        <View style={styles.buttonContainer}>
        {  
           !props.viewModel.isLoading? <CustonButton color={ colors.primary } title={"Mais um!"} onPress={()=>{props.actions.setAnotherCat()}}/> : 
          <CustonButton color={ colors.disabled } title={"Mais um!"} onPress={()=>{}}/>   
        }
        </View>
      </View>
  );
};





  


export default CatScreen;
