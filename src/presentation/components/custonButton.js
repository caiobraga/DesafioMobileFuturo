import React, { useState } from 'react';
import { StyleSheet, Button } from 'react-native';




const CustonButton = ({pressable, title, onPress}) => {
  

    return (
        pressable?
            <Button
            title={title}
            onPress={onPress}
            styles={
                styles.pressableButton
            }
            />
        :
            <Button
            title={title}
            onPress={onPress}
            styles={styles.unpressableButton}
            disabled={true}
            />
    );
  }

  const styles = StyleSheet.create({
    pressableButton: {

    },

    unpressableButton: {

    }

  });


  export default CustonButton;

