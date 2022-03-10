import React, { useState } from 'react';

import  SplashScreen  from './splashScreen';

const BlocSplashScreen = ({navigation}) => {


    
    class actions{
      async nextPage(){

         navigation.push('Home');
        }
      
    }
    

   
  
    return (<SplashScreen actions={new actions()} />);
  }

  export default BlocSplashScreen;

