import React,{ Component } from 'react';
import {
    Flatlist,StyleSheet,Text,View, Dimensions, Platform, Button,TouchableOpacity
} from 'react-native';

import Details from './Details';
import Modal from 'react-native-modalbox';
import { TextInput } from 'react-native-gesture-handler';
import FlatListData from './FlatListData';
import DatePicker from 'react-native-date-picker'
import PushNotification from "react-native-push-notification";

var screen = Dimensions.get('window');

export default class AddModal extends React.Component{
    constructor(props){
        super(props);

        PushNotification.configure({

            onRegister: function (token) {
              console.log("TOKEN:", token);
            },
           
            onNotification: function (notification) {
              console.log("NOTIFICATION:", notification);
                  
            },
           
            onAction: function (notification) {
              console.log("ACTION:", notification.action);
              console.log("NOTIFICATION:", notification);
           
            },
           
            onRegistrationError: function(err) {
              console.error(err.message, err);
            },
           
            permissions: {
              alert: true,
              badge: true,
              sound: true,
            },
           
            popInitialNotification: true,
           
            requestPermissions: true,
          });   

        
        this.state={
            newBookname:'',
            newDescription:'',
            date:new Date()
        };
       
    }

    showAddModal=()=>{
        this.refs.myModal.open();
    }
    generateKey = (numberOfCharacters)=>{
        return require('random-string')({length:numberOfCharacters});
    }

    Notification = () =>{
        PushNotification.localNotification({
            title: "Notification" , // (optional)
            message: "Add New Details", // (required)
            
          });
    }

    render(){
       
        return(
            <Modal 
            ref={"myModal"}
            style ={{justifyContent:'center',
            borderRadius:Platform.OS === 'ios' ? 30:10,
            shadowRadius:20,
            width:screen.width-80,
            height:500}}
            position='center'
            onClosed={() =>{
                alert("Modal closed");
            }}>
                {/* <Text style={{fontSize:16,
                fontWeight:'bold',
                textAlign:'center',
                marginTop:10,
                fontSize:25
                }}> Add New Data</Text> */}

                    <TouchableOpacity style={{ 
                            padding:20,
                            backgroundColor:'#59cbbd',
                            marginTop:5,
                            marginLeft:30,
                            marginRight:30,
                         justifyContent:'center',
                         alignItems:'center'}}
                         onPress={()=>{
                             if(this.state.newBookname.length == 0){
                                 alert("you must enter new book name");
                                 return;
                             }
                             const newKey = this.generateKey(24);
                             const newBook={
                                 key: newKey,
                                 name:this.state.newBookname,
                                 description:this.state.newDescription,
                                 date:this.state.date.toString()
                             };
                             FlatListData.push(newBook);
                             this.props.parentFlatList.refreshFlatList(newKey);
                            //  console.log(this.props.name);
                            //  console.log(this.props.item);
                            this.refs.myModal.close();
                            this.Notification();
                         }} >       
          
                <Text style={{color:'#fff',fontWeight:'bold',fontSize:20}}>ADD NEW DETAILS</Text>
                </TouchableOpacity>
                   
                 <TextInput style={{height:40,
                borderBottomColor:'gray',
                fontSize:17,
                marginLeft:30,
                marginRight:30,
                marginBottom:10,
                borderBottomWidth:1}}
                placeholder="Enter the name"

                onChangeText={(text)=>this.setState({newBookname:text})}
               
                value={this.state.newBookname}/>
 
                <TextInput style={{height:40,
                borderBottomColor:'gray',
                fontSize:17,
                marginLeft:30,
                marginRight:30,
                marginBottom:10,
                borderBottomWidth:1}}
                placeholder="Enter the description"

                onChangeText={(text)=>this.setState({newDescription:text})}
               
                value={this.state.newDescription}/>  
            
          

            <DatePicker
                date={this.state.date}
                mode="date"
                onDateChange={(date) => {this.setState({date: date})}}
            /> 
  
    
            </Modal>
            
        );
    }
}