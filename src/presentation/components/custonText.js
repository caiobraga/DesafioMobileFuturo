import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import Typografy from '../UI/typografy';



const CustonText = (props) => {

  const typografy = new Typografy(props.type);

  const styles = StyleSheet.create({
    text: {
    fontFamily: typografy.fontFamily,
    fontStyle: typografy.fontStyle,
    fontWeight: typografy.fontWeight,
    fontSize: typografy.fontSize,
    lineHeight: typografy.lineHeight,
    color: typografy.color,
    },
  });

  

    return (
      <Text style={styles.text}>{props.children}</Text>
    );
    
  }



  export default CustonText;

