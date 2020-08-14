

import React from 'react';
import {

  View,
  Text,
  StatusBar,
  StyleSheet,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import Details from './screens/Details';

const Stack = createStackNavigator();


const App= () => {
  return(

   <NavigationContainer>
      <Stack.Navigator initialRouteName="Notebook">
        <Stack.Screen name="Notebook" component={Login} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
     </NavigationContainer>
    
  )
 
};



export default App;
