import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';

import Typografy from '../UI/typografy';
 

const CustonTextInput = ({label, onChangeText, text, error, placeholder, description, title, color, type}) => {

  const typografy = new Typografy(type);

  const styles = StyleSheet.create({
    TextInput: {
    fontFamily: typografy.fontFamily,
    fontStyle: typografy.fontStyle,
    fontWeight: typografy.fontWeight,
    fontSize: typografy.fontSize,
    lineHeight: typografy.lineHeight,
    color: typografy.color,
    },
    TextInputContainer:{
      width:'100%'
    }
  });

    return (
     
      <View style={styles.TextInputContainer}>
      <Text style={{
        color: color
      }}>{title? title: ""}</Text>

      <TextInput
      error={error}
      label={label}
      placeholder={placeholder}
      value={text}
      onChangeText={text => onChangeText(text)}
      underlineColor={color}
      style={
        styles.TextInput
      }
    /> 
      <Text style={{
        color: color
      }}>{ description? description : "" }</Text>
   
    </View>
     

    );
  }



  export default CustonTextInput;

