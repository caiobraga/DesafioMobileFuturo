

import React from 'react';

import Routes from './src/presentation/routes/index';

import { 
  NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';

import { 
  Provider as PaperProvider, 
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme 
} from 'react-native-paper';

import { Context } from './src/utils/context';
import Colors from './src/presentation/UI/colors';
import Typografy from './src/presentation/UI/typografy';


const App = () => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const color = new Colors();
  const placeholderTypografyColor = new Typografy('placeholderlg').color;

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      primary: color.primary,
      accent: color.secondary,

      placeholder:placeholderTypografyColor,
      background: '#ffffff',
      surface:'#ffffff',
      text: '#333333',
      disabled: color.disabled
    },
  }
  
  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      primary: color.dark,
      placeholder:placeholderTypografyColor,
      background: '#333333',
      surface: '#333333',
      backdrop: '#333333',
      text: '#ffffff'
    }
  }
  

  const context = React.useMemo(()=>({
    toggleTheme: () => {
      setIsDarkTheme( isDarkTheme => !isDarkTheme );
    }
  }),[]);

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  return (
    <PaperProvider theme={theme}>
       <Context.Provider value={context}>
       <NavigationContainer theme={theme}>
        <Routes />
       </ NavigationContainer >
       </Context.Provider>
    </PaperProvider>
   
    
  );
};
  
 
  



export default App;