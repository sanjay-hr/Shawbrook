import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const CustomTextInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
}) => {
  return (
    <View style={styles.containerStyle}>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor='#f4c4d9'
        autoCorrect={false}
        style={styles.inputStyle}
        value={value}
        onChangeText={onChangeText}></TextInput>
    </View>
  );
};

export default CustomTextInput;
const styles = StyleSheet.create({
  inputStyle: {
    color: '#d3096b',
    paddingRight: 0,
    paddingLeft: 0,
    fontSize: 35,
    lineHeight: 40,
    borderBottomColor: '#7d2d52',
    borderBottomWidth: 1,
    fontWeight: 'bold',
  },
  containerStyle: {
    margin: 15,
    width: '100%',
    paddingLeft: 30,
    paddingRight: 30,
    resizeMode: 'contain',
},
});
