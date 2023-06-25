import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useColorScheme, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LittleLemonHeader from './component/LittleLemonHeader';
import LittleLemonFooter from './component/LittleLemonFooter';
import WelcomeScreen from './component/WelcomeScreen';
import LoginScreen from './component/LoginScreen';
import MenuItems from './component/MenuItems';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <View style={styles.container}>
          <LittleLemonHeader />
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerStyle: '#FBDABB' }}>
        <Stack.Screen 
        options= {{ title: 'Home' }}
        name="Welcome" 
        component={WelcomeScreen} />
        <Stack.Screen name="Menu" component={MenuItems} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
      </View>
        <View style={styles.footerContainer}>
          <LittleLemonFooter />
        </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
   flex: 1,
   backgroundColor: '#333333',
  },
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footer: {
    backgroundColor: '#333333',
   },

});

export default App