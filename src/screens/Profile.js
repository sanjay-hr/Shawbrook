import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
const AUTHORS = [
  {
    id: '1',
    name: 'Matt Johnson',
    amount: 'X123'
  },
  {
    id: '2',
    name: 'Will Smith',
    amount: 'X123'

  },
  {
    id: '3',
    name: 'Katie Hanson',
    amount: 'X123'
  },
  {
    id: '4',
    name: 'Katie Hanson',
    amount: 'X123'
  },
  {
    id: '5',
    name: 'Adhithi Ravichandran',
    amount: 'X123'
  },
];

function Profile({navigation}) {
  const TransactionInfo = ({ name, amount }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{'Recipient : ' + name}</Text>
      <Text style={styles.title}>{'Account : ' + amount}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <TransactionInfo name={item.name} amount={item.amount}/>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.headerRecipient}>Shawbrook</Text>
        <TouchableOpacity style={styles.logout} onPress={() => navigation.popToTop('launch')}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
      {/*<FlatList*/}
      {/*  data={AUTHORS}*/}
      {/*  renderItem={renderItem}*/}
      {/*  keyExtractor={item => item.id}*/}
      {/*/>*/}
    </SafeAreaView>
  );
}


export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  titleContainer: {
    padding: 10,
    flexDirection:'row',
    justifyContent: "space-between"
  },
  item: {
    padding: 10,
    marginVertical: 8,
    borderBottomWidth:1,
    borderBottomColor:'#19a0a0'
  },
  title: {
    fontSize: 14,
  },
  headerRecipient: {
    fontSize: 24,
    color: 'black',
    alignSelf:'center'
  },
  addRecipient:{
    backgroundColor: '#2ec4b6',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
    height: 40,
    borderRadius: 3,
  },
  logout:{
    borderColor: '#d28f8f',
    borderWidth:1,
    alignItems: 'center',
    justifyContent: 'center',
    width:70,
    height:70,
    borderRadius: 70/2,
  }
});
