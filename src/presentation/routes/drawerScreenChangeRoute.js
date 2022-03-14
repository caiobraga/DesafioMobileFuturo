import React from 'react';

import { View,  StyleSheet } from 'react-native';


import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
  IconButton
} from 'react-native-paper';
import {
  DrawerContentScrollView,
  DrawerItem,
  useDrawerStatus
} from '@react-navigation/drawer';

import{ Context } from '../../utils/context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const DrawerScreenChangeRoute = (props) => {
  const paperTheme = useTheme();


  const { toggleTheme } = React.useContext(Context);
  const isDrawerOpen = useDrawerStatus() === 'open';

const { colors } = useTheme();


const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  header: {
    backgroundColor:colors.primary,
    flex:0.1,
    width:'100%',
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
      marginBottom: 15,
      borderTopColor: '#f4f4f4',
      borderTopWidth: 1
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },

});


  return (

    <View style={{flex:1}}>
      <View style={styles.header}></View>
    <DrawerContentScrollView {...props}>
      
        <View style={styles.drawerContent}>

            <Drawer.Section style={styles.drawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="cat" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Gato"
                    onPress={() => {props.navigation.navigate('Gato')}}
                />
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="account-outline" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Pessoa"
                    onPress={() => {props.navigation.navigate('Pessoa')}}
                />
              
            </Drawer.Section>
           
        </View>
    </DrawerContentScrollView>
    <Drawer.Section style={styles.bottomDrawerSection}>
    <TouchableRipple onPress={() => {toggleTheme()}}>
                    <View style={styles.preference}>
                        <Text>Dark Theme</Text>
                        <View pointerEvents="none">
                            <Switch value={paperTheme.dark}/>
                        </View>
                    </View>
                </TouchableRipple>
    </Drawer.Section>
</View>
  );
};



  


export default DrawerScreenChangeRoute;
