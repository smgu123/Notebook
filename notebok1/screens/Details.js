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

class Flatimages extends React.Component{
  render(){
      return(
          <View>
              <View style={{flex:1,backgroundColor:"#59cbbd",flexDirection:'row'}}>

            <View style={{flexDirection:'column',flex:1}}>
      <Text style={styles.flatlistitems}>{this.props.item.name}</Text>

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
      color:'white',
      padding:10,
      fontSize:16
  }
})

// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
   
//   },

//   item: {
//     marginTop:24,
//          padding:20,
//          backgroundColor:'#59cbbd',
//        fontSize:24
//   },
// });

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
  //  this.refs.flatList.scrollToEnd();
 }

  onPressAdd(){
   
    this.refs.addModal.showAddModal();
  }

    render(){
    return (
      <View style={styles.container}>
         <View style={{backgroundColor:'#199187',height:64,flexDirection:'row',justifyContent:'flex-end'}} >
        <TouchableHighlight style={{marginRight:10}}underlayColor='tomato' onPress={this.onPressAdd}>
          <Image style={{width:55,height:60}} source={{uri:'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/add.png'}}/>
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
  