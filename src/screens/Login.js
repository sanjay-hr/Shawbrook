import React from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
import CustomLineButton from '../components/CustomLineButton';

function Login({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../logo/shawbrookBank.png')}
        style={styles.logo}
      />
      <CustomTextInput placeholder={'Customer number'} />
      <CustomTextInput placeholder={'*******'} />
      <TouchableOpacity
        style={{
          backgroundColor: '#ffff',
          height: 30,
          justifyContent: 'center',
          alignSelf: 'flex-end',
          paddingRight: 30,
        }}>
        <Text style={{color: '#d3096b'}}>Forgot password?</Text>
      </TouchableOpacity>
      <CustomButton
        title="Sign in"
        textFontSize={28}
        onPress={() => navigation.navigate('home')}
      />
      <CustomLineButton title="I don't know my sign in details" />
      <CustomLineButton title="Don't have an account? Sign up" />
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
    marginBottom: 50,
  },
});
