import React from 'react';

import { View, Button, Text } from 'react-native';


const PeopleScreen = (props) => {
 return(
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <Text>pessoa : { props.viewModel.getData().nome }</Text>
</View>
 );
};






export default PeopleScreen;

