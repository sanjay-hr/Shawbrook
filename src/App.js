import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// logged out
import Login from './screens/Login';

// logged in
import Home from './screens/Home';
import RecipientList from "./screens/RecipientList";
import AddAccount from "./screens/AddAccount";

import { Image } from "react-native";

const Stack = createStackNavigator();

function App() {
  const mainTab = createBottomTabNavigator();
  function TabStackScreen() {
    return (
        <mainTab.Navigator>
          <mainTab.Screen name="Home" component={Home}
                          options={{
                            tabBarIcon: ({ focused }) => (
                                <Image
                                    style={{width:20,height:20, marginHorizontal:10}}
                                    source={require('./logo/home.png')}
                                />
                            ),
                          }} />
          <mainTab.Screen name="Transaction" component={RecipientList}
                          options={{
                            tabBarIcon: ({ focused }) => (
                                <Image
                                    style={{width:20,height:20, marginHorizontal:10}}
                                    source={require('./logo/transaction.png')}
                                />
                            ),
                          }}/>
          <mainTab.Screen name="Recipient" component={AddAccount}
                          options={{
                            tabBarIcon: ({ focused }) => (
                                <Image
                                    style={{width:20,height:20, marginHorizontal:10}}
                                    source={require('./logo/parcel.png')}
                                />
                            ),
                          }}/>
        </mainTab.Navigator>
    );
  }


  return (
      <NavigationContainer>
              <Stack.Navigator screenOptions={{headerShown: false}}>
                  <Stack.Screen name="login" component={Login} />
                  <Stack.Screen name="home" component={TabStackScreen} />
              </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;

