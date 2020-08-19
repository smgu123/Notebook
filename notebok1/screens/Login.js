import React from 'react';
import {

  View,
  Text,
  Button,
 StyleSheet
} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

const Login=({navigation})=> {
  
  return (
    <ScreenContainer>
  <View style={styles.container}>
    <View style={styles.logForm}>
      <Text style={styles.header}>Login </Text>
      <TextInput style={styles.l1} placeholder="name" underlineColorAndroid={'transparent'}></TextInput>
      <TextInput style={styles.l1} placeholder="password" secureTextEntry={true} underlineColorAndroid={'transparent'}></TextInput>
    <TouchableOpacity style={styles.button} 
     onPress={()=>{navigation.navigate('Details')}}>
      <Text style={styles.btn}>LOGIN</Text>
    </TouchableOpacity>
    
    </View></View></ScreenContainer>
  );
  
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'#36485f',
    paddingLeft:60,
    paddingRight:60
  },
  logForm:{
    alignSelf:'stretch',
  },
  header:{
    fontSize:40,
    paddingBottom:10,
    alignItems:'center',
    justifyContent:'center',
    color:'#fff',
    marginBottom:40
  },
  l1:{
    fontSize:18,
    color:'#fff',
    alignSelf:'stretch',
    height:40,
    marginBottom:30,
    borderBottomColor:'#f8f8f8',
    borderBottomWidth:1,

  },
  button:{
    alignSelf:'stretch',
    padding:20,
    backgroundColor:'#59cbbd',
    marginTop:30,
    justifyContent:'center',
    alignItems:'center'
  },
  btn:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:20
  
  }
})

  export default Login;