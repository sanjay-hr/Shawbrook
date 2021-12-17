import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
const CustomButton = ({
  onPress,
  title,
  backgroundColor,
  buttonStyle,
  buttonColor,
  buttonTextColor,
  buttonBorderColor,
  buttonBorderWidth,
  textFontSize,
  buttonPadding,
  buttonMargin,
    buttonMarginTop,
}) => (
  <View style={[styles.container, {padding: buttonPadding || 30}]}>
    <TouchableOpacity
      onPress={onPress}
      backgroundColor={backgroundColor}
      style={{
        ...styles.buttoncontainer,
        ...buttonStyle,
        backgroundColor: buttonColor || '#d3096b',
        borderColor: buttonBorderColor,
        borderWidth: buttonBorderWidth,
        padding: buttonPadding,
        margin: buttonMargin,
        marginTop :buttonMarginTop || 50
      }}>
      <Text
        style={{
          ...styles.text,
          fontSize: textFontSize,
          color: buttonTextColor || '#ffff',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  </View>
);

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  buttoncontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#d3096b',
    width: '100%',
    height: 45,
  },
  text: {
    alignItems: 'center',
    fontWeight: 'normal',
    letterSpacing: 1.1,
    fontSize: 30,
    color: '#ffff',
  },
});
