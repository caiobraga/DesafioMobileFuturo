
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';

import {PeopleScreen} from "../screens/peopleScreen";
import {CatScreen} from "../screens/catScreen";



const Drawer = createDrawerNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
   <Drawer.Navigator initialRouteName="Pessoa">
     <Drawer.Screen name="Pessoa"  component={PeopleScreen} />
     <Drawer.Screen name="Gato" component={CatScreen} />
  </Drawer.Navigator>
  </NavigationContainer>
  );
};
  
  export default Routes;

