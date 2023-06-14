import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';

import LittleLemonHeader from './component/LittleLemonHeader';
import LittleLemonFooter from './component/LittleLemonFooter';
import WelcomeScreen from './component/WelcomeScreen';
import LoginScreen from './component/LoginScreen';
import MenuItems from './component/MenuItems';

const App = () => {
  const colorScheme = useColorScheme();


  return (
    <>
    <View style={[styles.header,
    colorScheme === 'light'
    ? { backgroundColor: '#d4d2d2' }
    : { backgroundColor: '#333333' },
    
    ]}>

      <LittleLemonHeader/>
      <WelcomeScreen/>
    </View>
        <View style={[styles.footer,
        colorScheme === 'light'
        ? { backgroundColor: '#d4d2d2' }
        : { backgroundColor: '#333333' },
        
        
        ]}>
        <LittleLemonFooter/>
      </View>
      </>
  );
}

const styles = StyleSheet.create({
  header: {
   flex: 1,
   backgroundColor: '#333333',
  },
  footer: {
    backgroundColor: '#333333',
   },

});

export default App