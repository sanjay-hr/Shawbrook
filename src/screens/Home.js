import React from 'react';
import {  SafeAreaView, StatusBar, StyleSheet, View } from "react-native";

function Home({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
      </View>
    </SafeAreaView>
  );
}

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  titleContainer: {
    flex:1,
    padding: 10,
    flexDirection:'column',
    justifyContent: "space-between",
    alignItems:'center'
  },
});
