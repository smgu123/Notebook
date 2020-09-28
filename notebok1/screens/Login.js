import React,{useEffect} from 'react';
import {

  View,
  Text,
  Button,
 StyleSheet,
 Image
} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import { AccessToken, LoginManager, LoginButton } from 'react-native-fbsdk';
import Icon from 'react-native-vector-icons/Ionicons';
import { Dimensions } from "react-native"; 

// var screen = Dimensions.get('window');
// var width = Dimensions.get('window').width; 
//  var height = Dimensions.get('window').height; //full height

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

const Login=({navigation})=> {
  
const[userName,setname] =React.useState("");
const[password,setpassword] =React.useState("");
  
  useEffect (() =>{
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: '497570353906-3g62dsspepd66mi3qm7427r5gdrg8e3c.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    });
  },[])

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      // this.setState({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  onLoginFacebook = () => {
    LoginManager.logInWithPermissions(["public_profile"]).then(
      function(result) {
        if (result.isCancelled) {
          console.log("Login cancelled");
        } else {
          console.log(
            "Login success with permissions: " +
              result.grantedPermissions.toString()
          );
        }
      },
      function(error) {
        console.log("Login fail with error: " + error);
      }
    );
  }
  
  return (
    <ScreenContainer>
  <View style={styles.container}>
    <View style={styles.logForm}>
      <Text style={styles.header}>LOGIN </Text>

     <View style={{flexDirection: 'row'}}>
    <Icon style ={{padding:10}}
    name='person'
    size={23}
  />
      <TextInput 
      style={styles.l1} placeholder="userName" underlineColorAndroid={'transparent'}
      onChangeText={text =>setname(text) }
      value={userName}
      >
      </TextInput>
      </View>
      
      <View style={{flexDirection: 'row'}}>
    <Icon style={{padding:10}}
    name='key'
    size={23}
  />
      <TextInput style={styles.l1} placeholder="password" secureTextEntry={true} underlineColorAndroid={'transparent'}
       onChangeText={text =>setpassword(text) }
       value={password}
       ></TextInput></View>

      <Text style={{color:'#77797a',alignSelf:'flex-end'}}>Forget Password?</Text>

    <TouchableOpacity style={styles.button} 
     onPress={()=>{navigation.navigate('Details')}}>
      <Text style={styles.btn}>LOGIN</Text>
    </TouchableOpacity>

    <View style={{flexDirection:'row'}}>
<Text style={{width:150,borderBottomColor:"black",borderBottomWidth:1,marginTop:20}}></Text>
<Text style={{marginTop:20,fontSize:15,alignSelf:'center'}}>OR</Text>
<Text  style={{width:160,borderBottomColor:"black",borderBottomWidth:1,marginTop:20}}></Text>
</View>
   
<TouchableOpacity onPress={signIn} style={styles.GooglePlusStyle}>
  
<Image
           
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/google-plus.png',
            }}
            style={styles.ImageIconStyle}
          />
                              <Text style={styles.TextStyle}>Login with Google </Text>
</TouchableOpacity>

   {/* <View style={{flexDirection:'row'}}> */}
      <TouchableOpacity style={styles.FacebookStyle} onPress={onLoginFacebook}>
      
        <Image
            //We are showing the Image from online
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/facebook.png',
            }}
            
            style={styles.ImageIconStyle}
          />
<Text style={styles.TextStyle}>  Login With Facebook </Text>
      </TouchableOpacity>
      
<Text onPress={()=>{navigation.navigate('Register')}} style={styles.reg}>Don't have an account?</Text>
{/* <Text onPress={()=>{navigation.navigate('Register')}} style={[styles.reg,{color:'red'}]}>Don't have an account?</Text> */}
 </View></View></ScreenContainer>
  );
  
}


const styles= StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'white',
    paddingLeft:20,
    paddingRight:20
  },
  logForm:{
    alignSelf:'stretch',
  },

  header:{
    fontSize:40,
    paddingBottom:10,
    alignSelf:'center',
    color:'#77797a',
    marginBottom:40
  },
  l1:{
    flex: 1,
    fontSize:18,
    color:'black',
   alignItems:'center',
   justifyContent:'center',
    height:40,
    marginBottom:30,
    borderBottomColor:'black',
    borderBottomWidth:1,

  },
  button:{
    alignSelf:'stretch',
    padding:15,
    backgroundColor:'#8c8888',
    marginTop:30,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:8
  },
  btn:{
    color:'white',
    fontWeight:'bold',
    fontSize:20
  
  },
  b1:{
    alignSelf:'stretch',
    padding:10,
    backgroundColor:'#8c8888',
    marginTop:20,
    justifyContent:'center',
    alignItems:'center',
    width:335,height: 60,
    borderRadius:8
  },
  GooglePlusStyle: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#8c8888',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 60,
    width: "100%",
    alignSelf:'center',
    borderRadius: 5,
    margin: 15,
  },
  FacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#8c8888',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 60,
    width: "100%",
    alignSelf:'center',
    borderRadius: 5,
    margin: 5,
  },
  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
  TextStyle: {
    color: '#fff',
    // marginBottom: 4,
    marginRight: 20,
    fontSize:18,
    marginLeft:10
  },
  reg:{
    color:'#77797a',
    paddingTop:15,
    fontSize:17,
    alignSelf:'center'

  }
})

  export default Login;