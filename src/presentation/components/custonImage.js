import React from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';




const CustonImage = ({source, width, height}) => {
  
  const styles = StyleSheet.create({

    logo: {
      width: width,
      height: height,
      borderRadius: 0
    },
  });
    return (
       <Image style={styles.logo}
          source={source}
      />
    );
  }



  export default CustonImage;

