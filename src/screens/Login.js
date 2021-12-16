import React from 'react';

import {SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity} from "react-native";

function Login({navigation}) {
  return (
      <SafeAreaView style={styles.container}>
          <TouchableOpacity style={styles.login} onPress={() => navigation.navigate('home')}>
              <Text>Log In</Text>
          </TouchableOpacity>
      </SafeAreaView>

  );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        alignItems:'center'
    },
    login:{
        borderColor: '#d28f8f',
        borderWidth:1,
        alignItems: 'center',
        justifyContent: 'center',
        width:70,
        height:70,
        borderRadius: 70/2,
    }
});

