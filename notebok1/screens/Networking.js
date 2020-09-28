// import React, { Component } from 'react';
// import { ActivityIndicator, FlatList, Text, View, StyleSheet,TouchableOpacity } from 'react-native';
// import { NavigationContainer, StackActions } from '@react-navigation/native';

// export default class Fetch extends Component {
 
//   constructor(props) {
//     super(props);
//     this.state = {  
//       text:"loading",
//     };
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(data => data.json())
//       .then(result => {
//         this.setState({ text:result[0].name});
//       })
//   }

  

//   render() {
//     const { goBack } = this.props.navigation;
    

//     return (

//        <View>
//          <Text style={{fontSize:30}}>
//            {this.state.text}
//          </Text>
         
//           <TouchableOpacity style={styles.button} 
//               onPress={()=>goBack('Details')}>
//                {/* onPress={()=>this.props.navigation.dispatch(StackActions.popToTop("Details"))} >  */}
//                <Text style={styles.btn}>Done</Text>
//              </TouchableOpacity>
//              </View>
//     );
//   }
// };

// const styles = StyleSheet.create({

//   button:{
//     padding:20,
//     backgroundColor:'#36485f',
//     marginTop:30,
//     justifyContent:'center',
//     alignItems:'center'
//   },
//   btn:{
//     color:'#fff',
//     fontWeight:'bold',
//     fontSize:20
  
//   }
  
// })


import React, { Component } from 'react';
import { FlatList, Text, View, NativeModules,TouchableOpacity} from 'react-native';
import axios from 'react-native-axios';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      // isLoading: true
    };
  }

//  async componentDidMount() {
//     const response = await fetch('https://reactnative.dev/movies.json')
//     console.log(response.data)
//      const data1 = await response.json()
    
//         this.setState({ data: data1.movies });
     
//         this.setState({ isLoading: false });
    
//   }

  async componentDidMount() {
    try{
    const response = await axios.get("https://reactnative.dev/movies.json")
    // console.log(response)
  
        this.setState({ data: response.data.movies });
   
        // this.setState({ isLoading: false });
      }
      catch(error){
        alert("api cannot fetched",error);
        
      }
      
  }

  render() {
    var ToastExample = NativeModules.ToastExample;

    const { data } = this.state;

    return (
      <View style={{ flex: 1, padding: 24,backgroundColor:'#122829' }}>
       
          <FlatList
            data={data}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => (
              <Text style={{fontWeight:"bold",fontSize:20,color:"white"}}>{item.title}, {item.releaseYear}</Text>
            )}
          />

            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>

              <TouchableOpacity onPress={() => {
                ToastExample.show('hello from native android', ToastExample.SHORT);
              }}
            style={{alignSelf:'stretch',
            padding:10,
            backgroundColor:'#8c8888',
            margin:30,
            justifyContent:'center',
            alignItems:'center',
            borderRadius:8
            }}>
            <Text style={{color:'black',fontSize:30}}>press</Text>
          </TouchableOpacity>
        
      </View>
       
      </View>
    );
  }
};
