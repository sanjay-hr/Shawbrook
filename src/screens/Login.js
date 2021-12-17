import React from 'react';

import {SafeAreaView, StatusBar, StyleSheet, Image} from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
import CustomLineButton from '../components/CustomLineButton';

function Login({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
        <Image
            source={require('../logo/shawbrookBank.png')}
            style={styles.logo}/>
      <CustomTextInput placeholder={'Customer number'}/>
      <CustomTextInput placeholder={'*******'}/>
      <CustomButton
          title="Sign in"
          textFontSize={30}
          onPress={() => navigation.navigate('home')}/>
      <CustomLineButton title="Forgot password?"/>
      <CustomLineButton title="I don't know my sign in details"/>
    </SafeAreaView>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    alignItems: 'center',
    backgroundColor: '#ffff',
  },
  login: {
    borderColor: '#d28f8f',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
  },
  logo: {
    marginTop: StatusBar.currentHeight || 50,
    marginBottom: 80,
  },
});
