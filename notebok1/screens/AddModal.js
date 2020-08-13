import React,{ Component } from 'react';
import {
    Flatlist,StyleSheet,Text,View, Dimensions, Platform, Button,TouchableOpacity
} from 'react-native';

import Details from './Details';
import Modal from 'react-native-modalbox';
import { TextInput } from 'react-native-gesture-handler';
import FlatListData from './FlatListData';

var screen = Dimensions.get('window');

export default class AddModal extends React.Component{
    constructor(props){
        super(props);
        this.state={
            newBook:'',
        };
    }

    showAddModal=()=>{
        this.refs.myModal.open();
    }
    generateKey = (numberOfCharacters)=>{
        return require('random-string')({length:numberOfCharacters});
    }

    render(){
        return(
            <Modal 
            ref={"myModal"}
            style ={{justifyContent:'center',
            borderRadius:Platform.OS === 'ios' ? 30:0,
            shadowRadius:20,
            width:screen.width-80,
            height:280}}
            positin='center'
            backdrop={true}
            onClosed={() =>{
                alert("Modal closed");
            }}>
                <Text style={{fontSize:16,
                fontWeight:'bold',
                textAlign:'center',
                marginTop:40,
                fontSize:25
                }}> TextBook Name</Text>

                <TextInput style={{height:40,
                borderBottomColor:'gray',
                fontSize:17,
                marginLeft:30,
                marginRight:30,
                marginBottom:10,
                borderBottomWidth:1}}
                placeholder="Enter the new name of notebook"

                onChangeText={(text)=>this.setState({newBook:text})}
               
                value={this.state.newBook}/>
                
            
            <TouchableOpacity style={{ 
                            padding:20,
                            backgroundColor:'#59cbbd',
                            marginTop:30,
                            marginLeft:30,
                            marginRight:30,
                        justifyContent:'center',
                         alignItems:'center'}}
                         onPress={()=>{
                             if(this.state.newBook.length == 0){
                                 alert("you must enter new book name");
                                 return;
                             }
                             const newKey = this.generateKey(24);
                             const newBook={
                                 key: newKey,
                                 name:this.state.newBook,
                             };
                             FlatListData.push(newBook);
                             this.props.parentFlatList.refreshFlatList(newKey);
                            this.refs.myModal.close();
                         }} >
  
      <Text style={{color:'#fff',fontWeight:'bold',fontSize:20}}>Save</Text>
    </TouchableOpacity>
            
            </Modal>
            
        );
    }
}
