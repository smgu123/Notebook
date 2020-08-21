import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';

export default class Fetch extends Component {
  constructor(props) {
    super(props);

    this.state = {  
      text:"loading",
      

    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
      .then(data1 => {
        this.setState({ text:data1[1].name });
      })
  }


  render() {
    const { goBack } = this.props.navigation;
    

    return (

       <View>
         <Text style={{fontSize:30}}>
           {this.state.text}
         </Text>
         
          <TouchableOpacity style={styles.button} 
              onPress={()=>goBack('Details')}>
               {/* onPress={()=>this.props.navigation.dispatch(StackActions.popToTop("Details"))} >  */}
               <Text style={styles.btn}>Done</Text>
             </TouchableOpacity>
             </View>
    );
  }
};

const styles = StyleSheet.create({

  button:{
    padding:20,
    backgroundColor:'#36485f',
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