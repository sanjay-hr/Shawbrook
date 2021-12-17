import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import CustomButton from '../components/CustomButton';

export default function Launch({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../logo/shawbrookBank.png')}
        style={styles.logo}
      />
      <View style={styles.buttonContainer}>
        <CustomButton
          title="New customer? Get started"
          buttonColor="#ffff"
          buttonTextColor="#d3096b"
          textFontSize={18}
          buttonBorderWidth={1}
          onPress={() => navigation.navigate('introSlider')}
        />
        <CustomButton
          title="Existing customer? Log in"
          buttonColor="#d3096b"
          buttonTextColor="#ffff"
          textFontSize={18}
          buttonBorderWidth={1}
          buttonBorderColor="#ffff"
          onPress={() => navigation.navigate('login')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    marginTop: StatusBar.currentHeight || 0,
    alignItems: 'center',
    backgroundColor: '#ffff',
  },
  logo: {
    marginTop: StatusBar.currentHeight || 50,
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'flex-end',
  },
});
