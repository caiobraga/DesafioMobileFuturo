import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { TextInput } from 'react-native-paper';

const CustonTextInput = ({label, onChangeText, text, hasError, Error}) => {
  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
    return (
      !hasError?
      <TextInput
      label={label}
      value={text}
      onChangeText={(text)=>{onChangeText(text)}}
    />
      :
      <TextInput

      label={label}
      value={text}
      onChangeText={text => onChangeText(text)}
    />
    );
  }



  export default CustonTextInput;

