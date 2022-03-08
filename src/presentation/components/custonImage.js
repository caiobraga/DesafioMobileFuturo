import React from 'react';
import { StyleSheet, Image } from 'react-native';


const styles = StyleSheet.create({

    logo: {
      width: 66,
      height: 58,
    },
  });

const CustonImage = ({isLoading, hasData, source}) => {
  

    return (
        isLoading ?
        <Image
        style={styles.logo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      /> :
      hasData ?
       <Image style={styles.logo}
          source={source}
      /> :
      <Image
        style={styles.logo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
    );
  }



  export default CustonImage;

