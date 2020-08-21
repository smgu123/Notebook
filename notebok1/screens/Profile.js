import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';

import {useTheme} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-crop-picker';
 

  class Profile extends React.Component {
      constructor(props){
          super(props)
          this.state={
              image:""
          }
      }

      choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
          width: 300,
          height: 300,
          cropping: true,
        }).then(image => {
          this.setState({image:image.path});
        
        });
      }

      render(){
    return(
        <View style={{flex:1,backgroundColor:'#59cbbd'}} >
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity onPress = {() => this.choosePhotoFromLibrary()}
            style={{height:150,width:150,borderRadius:200,backgroundColor:'#36485f'}}>

                {this.state.image != '' &&
                 (
                 <Image source={{uri: this.state.image}} 
                 style={{height:150,width:150,borderRadius:200}}/>
                 )}
                
            </TouchableOpacity>

            <View style={styles.action}>
          <FontAwesome name="user-o" size={20} />
          <TextInput
          underlineColorAndroid={'transparent'}
            placeholder="Name"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={ styles.textInput       
            }
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="user-o" size={20} />
          <TextInput
            placeholder="Gender"
            autoCorrect={false}
            style={
              styles.textInput
            }
          /></View>

             <View style={styles.action}>
          <FontAwesome name="user-o" size={20} />
          <TextInput
            placeholder="Occupation"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={ styles.textInput}
          />
        </View>
            <TouchableOpacity style={styles.button} 
              onPress={()=>{this.props.navigation.navigate('Details')}}>
               <Text style={styles.btn}>Done</Text>
             </TouchableOpacity>
        </View>
        </View>
    );
  }
}

  export default Profile;

  const styles = StyleSheet.create({

  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
    padding:20
  },

  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 20,
    color: '#05375a',
  },
  text1: {
    fontSize:25,
    color:'black',
    alignSelf:'stretch',
    height:40,
    marginBottom:30,
    borderBottomColor:'black',
    borderBottomWidth:1,
  },
  button:{
    padding:20,
    backgroundColor:'#36485f',
    marginTop:30,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20
  },
  btn:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:20
  
  }
  
})