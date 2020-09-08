import React from 'react';
import {StyleSheet,View, Text,TouchableOpacity,CheckBox} from 'react-native';
import { TextInput } from 'react-native-paper';

const Register = ({navigation}) => {

    const [name,setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [contact,setcontact] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmpassword, setconfirmpassword] = React.useState('');
    const [isSelected, setSelection] = React.useState(false);

    return(
        <View style={{marginTop:20}}>
        
        <TextInput
        style={styles.input}
        placeholder={'FUllname'}
        value={name}
        underlineColorAndroid={"transparent"}
        onChangeText={setName}>
        </TextInput>

        <TextInput
        style={styles.input}
        placeholder={'Email'}
        keyboardType={'Email'}
        value={email}
        underlineColorAndroid={"transparent"}
        onChangeText={setEmail}>
        </TextInput>

        <TextInput
        style={styles.input}
        placeholder={'contact'}
        keyboardType={'numeric'}
        value={contact}
        underlineColorAndroid={"transparent"}
        onChangeText={setcontact}>
        </TextInput>

        <TextInput
        style={styles.input}
        placeholder={'Password'}
        secureTextEntry
        value={password}
        underlineColorAndroid={"transparent"}
        onChangeText={setPassword}>
        </TextInput>

        <TextInput
        style={styles.input}
        placeholder={'confirmpassword'}
        secureTextEntry
        value={confirmpassword}
        underlineColorAndroid={"transparent"}
        onChangeText={setconfirmpassword}>
        </TextInput>
    
        <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Terms  conditions Apply</Text>
      </View>

        <TouchableOpacity style={styles.button} 
     onPress={()=>{navigation.navigate('Login')}}>
      <Text style={styles.btn}>CREATE</Text>
    </TouchableOpacity>

    <Text onPress={()=>{navigation.navigate('Login')}} style={styles.reg}>Already have an account?</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    
    input: {
        backgroundColor: '#e8e8e8',
        width: '80%',
        alignSelf:'center',
        margin:10,
        borderWidth:1,
        color: 'black',
      },
      button:{
        alignSelf:'center',
        width:'70%',
        padding:15,
        backgroundColor:'#8c8888',
        marginTop:15,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8
      },
      btn:{
        color:'white',
        fontWeight:'bold',
        fontSize:20
     
      },
      reg:{
        color:'#77797a',
        paddingTop:10,
        fontSize:17,
        alignSelf:'center'
      },
      checkboxContainer: {
        flexDirection: "row",
        // marginBottom: 20,
        marginLeft:35
      },
      checkbox: {
        alignSelf: "center",   
      },
      label: {
        margin: 8,
      },
  });

  export default Register;