
import React from 'react';
import {

  View,
  Text,
  StatusBar,
  StyleSheet,
} from 'react-native';

import { NavigationContainer, StackActions,getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './screens/Login';
import Details from './screens/Details';
import Icons from 'react-native-vector-icons/Ionicons';
import Profile from './screens/Profile';
import DrawerContent from './screens/DrawerContent';
import Networking from './screens/Networking';
import Register from './screens/Register';
import ReduxPage from './Redux/counter/ReduxCounter';
import { store } from './Redux/store/store';
import { Provider } from 'react-redux';
import JitsiMeet from './screens/JitsiMeet';
import Docpicker from './screens/Docpicker';

const LoginStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const NetworkingStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const RegisterStack = createStackNavigator();
const ReduxPageStack = createStackNavigator();
const JitsiMeetStack = createStackNavigator();
const DocpickerStack = createStackNavigator();



const screenOptionStyle = {
  headerStyle : {backgroundColor:"#009387",
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontSize:25
  }
};

const DetailsStackScreen = ({navigation}) => (
  <DetailsStack.Navigator screenOptions={screenOptionStyle}>
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
 <ProfileStack.Navigator screenOptions={{
  headerShown: false
}}>
   <ProfileStack.Screen name = "Profile" component={Profile}/>
 </ProfileStack.Navigator>
);

const NetworkingStackScreen = () => (
  <NetworkingStack.Navigator>
    <NetworkingStack.Screen name = "Networking" component={Networking}/>
</NetworkingStack.Navigator>
);

const RegisterStackScreen = () => (
  <RegisterStack.Navigator>
  <RegisterStack.Screen name = "Register" component={Register}/>
</RegisterStack.Navigator>
);

const ReduxPageStackScreen = ({navigation}) => (
  <ReduxPageStack.Navigator>
  <ReduxPageStack.Screen name = "ReduxPage" component={ReduxPage}
   options={{title:'Redux',headerLeft:() => (
    <Icons.Button name="arrow-back" size={30}  
    onPress={() => navigation.navigate('Details')}></Icons.Button>)}}/>
</ReduxPageStack.Navigator>
);

const JitsiMeetStackScreen = () => (
  <JitsiMeetStack.Navigator>
  <JitsiMeetStack.Screen name = "JitsiMeet" component={JitsiMeet}/>
</JitsiMeetStack.Navigator>
);

const DocpickerStackScreen = () => (
  <DocpickerStack.Navigator>
    <DocpickerStack.Screen name = "Docpicker" component={Docpicker}/>
</DocpickerStack.Navigator>
);

const App = () => {
  
  return(
<>
    <Provider store={store}>
   <NavigationContainer>
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
    <Drawer.Screen name="Login" component={Login} options={{gestureEnabled: false}}/>
    <Drawer.Screen name="Details" component={DetailsStackScreen} />
    <Drawer.Screen name="Profile" component={Profile} options={{gestureEnabled: false}}/>
    <Drawer.Screen name="Register" component={RegisterStackScreen} options={{gestureEnabled: false}} />
    <Drawer.Screen name="Networking" component={NetworkingStackScreen} />
    <Drawer.Screen name="ReduxPage" component={ReduxPageStackScreen} />
    <Drawer.Screen name="JitsiMeet" component={JitsiMeetStackScreen} />
    <Drawer.Screen name="Docpicker" component={DocpickerStackScreen} />
    </Drawer.Navigator>
     </NavigationContainer> 
     </Provider>
     </>
  );
};

export default App;
