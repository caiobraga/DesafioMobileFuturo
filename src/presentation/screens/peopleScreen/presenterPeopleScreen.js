import React from 'react';

import { View, Button, Text } from 'react-native';
import BlocPeopleScreen from './blocPeopleScreen';
import ViewModelPeopleScreen from './viewModelPeopleScreen';


const PresenterPeopleScreen = () => {
 return(
    <BlocPeopleScreen viewModel={new ViewModelPeopleScreen("CAIO","caio","caio")}/>
 );
};






export default PresenterPeopleScreen;

