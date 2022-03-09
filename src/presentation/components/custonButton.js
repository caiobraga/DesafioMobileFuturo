import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import CustonText from './custonText';





const CustonButton = ({color, size, title, onPress}) => {
    
    const typografy = size? (size == "sm")? 'btsm' : (size == "md")? 'btmd' : 'btlg' :'btlg';

    
  const styles = StyleSheet.create({

    Button:{
        backgroundColor: color,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 22,
        paddingVertical: 18,
        minHeight: 37,
        borderRadius: 5,
    },

    


  });



    return (
        <TouchableOpacity onPress={onPress} style={styles.Button}>
            <CustonText type={typografy}>
                {title}
            </CustonText>
        </TouchableOpacity>
        
    );
  }



  export default CustonButton;

