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

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-crop-picker';
import {Picker} from '@react-native-community/picker';
import Native from "react-native";

var width = Native.Dimensions.get('window').width; 

  class Profile extends React.Component {
      constructor(){
          super()
          // console.log(props)
          this.state={
              image:"",
              selectedLabel:''

          }
        
      }

      showPicker = (value) =>{
            this.setState({selectedLabel:value});
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
            <TouchableOpacity onPress = {this.choosePhotoFromLibrary}
            style={{height:150,width:150,borderRadius:200,backgroundColor:'#36485f',marginTop:40}}>

                {this.state.image != '' &&
                 (
                 <Image source={{uri: this.state.image}} 
                 style={{height:150,width:150,borderRadius:200}}/>
                 )}
                
            </TouchableOpacity>

            <View style={styles.action}>
          <FontAwesome name="user-o" size={20} />
          <TextInput
            placeholder="Name"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={ styles.textInput       
            }
          />
        </View>
        <View style={styles.picker}>
            
            <Picker selectedValue={this.state.selectedLabel}
              style={{height: 100, width: "100%"}}
             onValueChange={(itemValue, itemIndex) =>
              this.setState({selectedLabel: itemValue})}>

              <Picker.Item label = "Gender" value="gender" ></Picker.Item>
              <Picker.Item label = "Male" value="male" ></Picker.Item>
              <Picker.Item label = "Female" value="female"></Picker.Item>
            </Picker> 
           
            </View>         

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
              onPress={()=>{this.props.navigation.navigate('Details')}}
              >
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
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingBottom: 2,
    padding:10,
    width:"70%",
  },

  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 20,
    color: '#05375a',
  },
  
  button:{
    padding:20,
    backgroundColor:'#36485f',
    marginTop:30,
    marginBottom:40,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20,
    width:'40%'
  },
  btn:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:20
  
  },
  picker:{
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    width:"70%",
    marginBottom:30
  }
  
})