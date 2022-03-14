
import React, {useState} from 'react';


import { createDrawerNavigator, useDrawerStatus } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import {PeopleScreen} from "../screens/peopleScreen";
import {CatScreen} from "../screens/catScreen";
import { SplashScreen } from '../screens/splashScreen';
import { DrawerContent } from './drawerContentCat';
import Typografy from '../UI/typografy';
import CustonText from '../components/custonText';
import Colors from '../UI/colors';
import Utils from "../UI/utils";


import {DrawerContentCat} from "./drawerContentCat"
import DrawerScreenChangeRoute from "./drawerScreenChangeRoute"

const Drawer = createDrawerNavigator();


const Stack = createStackNavigator();

const utils = new Utils();

const Home = () => {

  
  return (
        <Drawer.Navigator
    defaultStatus='closed'
    
    screenOptions={{
      drawerType: 'back',
      drawerPosition:'left',
      headerShown:false,
      swipeEnabled:true,

      drawerStyle:{
        width: 200,
      },
      sceneContainerStyle:{
        left:utils.left,
      }
      
    }} drawerContent={props=><DrawerScreenChangeRoute {...props}/>} initialRouteName="Gato">
    <Drawer.Screen name="Gato"   component={CatScreen} options={({
     headerTitle: ()=>{},
    })}
     />
      <Drawer.Screen name="Pessoa"   component={PeopleScreen} options={({
     headerTitle: ()=>{},
    })}
     />
   </Drawer.Navigator>
  );
}

const Routes = () => {

  return (
    <Stack.Navigator>
    <Stack.Screen name="Splash" component={SplashScreen} 
    options={({
      headerShown:false
    })}
    />
    <Stack.Screen name="Gato" component={Home} 
    options={({
      headerShown:false
    })}
    />

    </Stack.Navigator>

  );
};
  
  export default Routes;

