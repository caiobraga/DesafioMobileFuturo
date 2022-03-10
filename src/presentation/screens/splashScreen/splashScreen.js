import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

import { useTheme } from 'react-native-paper';


import CustonButton from "../../components/custonButton";
import CustonImage from "../../components/custonImage";
import CustonText from "../../components/custonText";

import Utils from "../../UI/utils";
const SplashScreen = (props) => {

const utils = new Utils();
const width = utils.windowWidth * 0.9 ;
const height = utils.windowHeight*0.40;

const { colors } = useTheme();
  return (

      <View style={{backgroundColor: colors.primary}, styles.container}>
      <View style={styles.textContainer}>
           <CustonText type={'dis4'}>Bem vindo ao desafio futuro</CustonText>
        </View>
        <View style={styles.buttonContainer}>
           <CustonButton color={ colors.primary } title={"Entrar"} onPress={()=>{props.actions.nextPage()}}/>
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
  alignContent: 'center',
  justifyContent:'space-evenly',
  alignItems:'center'
},
textContainer:{
  alignContent: 'center',
  justifyContent: 'center',
  alignItems:'center',
  flex: 1/3,

},

buttonContainer:{
  padding: 8,
  flex: 2/3,
  justifyContent: 'center',
  height: "100%",
  width: "100%", 
}

});




  


export default SplashScreen;
