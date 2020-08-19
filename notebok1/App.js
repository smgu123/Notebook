

import React from 'react';
import {

  View,
  Text,
  StatusBar,
  StyleSheet,
} from 'react-native';

import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './screens/Login';
import Details from './screens/Details';
import Icons from 'react-native-vector-icons/Ionicons';
import Profile from './screens/Profile';
import DrawerContent from './screens/DrawerContent';
import Fetch from './screens/Fetch';

const LoginStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const FetchStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DetailsStackScreen = ({navigation}) => (
  <DetailsStack.Navigator screenOptions={{
    headerStyle : {backgroundColor:"#009387",
  },
  headertTintcolor:'#fff',
  headerTitleStyle: {
    color:'white',
    fontSize:25
  }
   }}>
    <DetailsStack.Screen name="Notes" component={Details} 
    options={{title:'Notes',headerLeft:() => (
      <Icons.Button name="ios-menu" size={35} backgroundColor="#009387" 
      onPress={() => navigation.openDrawer()}></Icons.Button>)}}/>
  </DetailsStack.Navigator>
);

const LoginStackScreen = () => (
  <LoginStack.Navigator screenOptions={{
    headerShown: false
  }}>
    <LoginStack.Screen name="Login" component={Login} />
  </LoginStack.Navigator>
);


const ProfileStackScreen = () => (
 <ProfileStack.Navigator>
   <ProfileStack.Screen name = "Profile" component={Profile}/>
 </ProfileStack.Navigator>
);

const FetchStackScreen = () => (
  <FetchStack.Navigator>
  <FetchStack.Screen name = "Fetch" component={Fetch}/>
</FetchStack.Navigator>
);

const App= () => {
  
  return(

   <NavigationContainer>
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
    <Drawer.Screen name="Login" component={LoginStackScreen} />
    <Drawer.Screen name="Details" component={DetailsStackScreen} />
    <Drawer.Screen name="Profile" component={ProfileStackScreen} />
    <Drawer.Screen name="Fetch" component={FetchStackScreen} />
    </Drawer.Navigator>
     </NavigationContainer> 
  )
};

export default App;
