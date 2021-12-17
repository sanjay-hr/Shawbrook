import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
const CustomLineButton = ({onPress, title, backgroundColor, color, width, height, marginLeft}) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onPress} style={styles.buttoncontainer}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  </View>
);

export default CustomLineButton;

const styles = StyleSheet.create({
  container: {
    //width: '100%',
    flex: 0,
    justifyContent: 'flex-end',
    top: 150,
    height: 50,
    alignSelf: 'flex-end',
    paddingRight: 30,
  },
  buttoncontainer: {
    backgroundColor: '#ffff',
    height: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#d3096b',
  },
  text: {
    alignItems: 'center',
    fontWeight: 'normal',
    letterSpacing: 1.1,
    fontSize: 18,
    color: '#d3096b',
  },
});
