
import React from 'react';


import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import {PeopleScreen} from "../screens/peopleScreen";
import {CatScreen} from "../screens/catScreen";
import { SplashScreen } from '../screens/splashScreen';
import { DrawerContent } from './drawerContent';
import Typografy from '../UI/typografy';
import CustonText from '../components/custonText';
import Colors from '../UI/colors';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();
const Home = () => {
  return (
    <Drawer.Navigator drawerContent={props=><DrawerContent {...props}/>} initialRouteName="Gato">
    <Drawer.Screen name="Gato" component={CatScreen} options={({
     headerTitle: ()=>{return <CustonText type={'dis4'}>Gato</CustonText>},
     headerTintColor: new Colors().primary,
    
     }
     )}
     />
     <Drawer.Screen name="Pessoa" component={PeopleScreen} 
     options={({ 
       headerTitle: ()=>{return <CustonText type={'dis4'}>Pessoa</CustonText>} ,
       headerTintColor: new Colors().primary,
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
    <Stack.Screen name="Home" component={Home} 
    options={({
      headerShown:false
    })}
    />
    </Stack.Navigator>

  );
};
  
  export default Routes;

