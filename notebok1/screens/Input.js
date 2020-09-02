import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const Input = ({style, ...props})=> {
  return (
    <TextInput
      {...props}
      style={[styles.input, style]}
      placeholderTextColor={'darkgray'}
      underlineColorAndroid={'transparent'}
      autoCapitalize="characters"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#e8e8e8',
    width: '100%',
    padding: 12,
    color: 'black',
    borderWidth:1,
    alignSelf:"center",
    width:"80%",
    marginTop:25,
    fontSize:20,
    borderRadius:8
  },
});

export default Input;