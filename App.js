import React from 'react'
import {View,StyleSheet,Text} from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Buttonn from './components/Button'
import AssetExample from './components/AssetExample'

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'rgb(255, 255, 255)',
  },
};

const App = ()=>{
  return (
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          initialRouteName="home"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="home" component={Buttonn} />
          <Stack.Screen name="product" component={AssetExample} />
        

        </Stack.Navigator>
      </NavigationContainer>
  )
}



export default App;