import React from 'react';
import {

    View,
    Text,
    Button,
   StyleSheet,
   TouchableHighlight,Platform,Image
  } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import AddModal from './AddModal';
import FlatListData from './FlatListData';
import Icon from 'react-native-vector-icons/Ionicons';

class Flatimages extends React.Component{
  render(){
      return(
          <View>
              <View style={{flex:1,backgroundColor:"#59cbbd",flexDirection:'row'}}>
              <Icon 
               name="document-text" 
                                color="black"
                                size={60}
                                style={{padding:8,marginTop:30}}
                                >{this.props.item.icon}</Icon>
            <View style={{flexDirection:'column',flex:1}}>
      <Text style={styles.flatlistitems}>{this.props.item.name}</Text>
     
      <Text style={styles.flatlistitems}>{this.props.item.description}</Text>
      <Text style={styles.flatlistitems}>{this.props.item.date}</Text>

            </View>
        </View>  
        <View style={{height:1,
      backgroundColor:'white'}}>

        </View>
          </View>
        
      );
  }
}

const styles=StyleSheet.create({
  flatlistitems:{
      color:'black',
      padding:8,
      fontSize:18,
      marginLeft:10
  }
})

export default class Details extends React.Component {
  
  constructor(props){
    super(props);

    this.state = ({
      deletedRowKey: null,
    });
    this.onPressAdd = this.onPressAdd.bind(this);
  }
 refreshFlatList = (activeKey)=>{ 

   this.setState((prevState) =>{
      return{
        deletedRowKey:activeKey
      };
   });
 }

  onPressAdd(){
   
    this.refs.addModal.showAddModal();
  }

    render(){
    return (
      <View style={styles.container}>
         <View style={{backgroundColor:'#199187',height:64,flexDirection:'row',justifyContent:'flex-end'}} >
        <TouchableHighlight style={{marginRight:10}}underlayColor='tomato' onPress={this.onPressAdd}>
        <Icon 
               name="add-circle-outline" 
                                color="black"
                                size={60}
                                />
        </TouchableHighlight>
      </View>
  
      <FlatList
                ref={"flatlist"}
                data={FlatListData}
                parentFlatList={this}
                renderItem={({item})=>{
                    return(<Flatimages item={item} parentFlatList={this}></Flatimages>);

                }}></FlatList>
                <AddModal ref = {'addModal'} parentFlatList={this}></AddModal>
    </View>
   
   
    );
  }
}