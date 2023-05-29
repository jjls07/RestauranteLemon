import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import LittleLemonHeader from './component/LittleLemonHeader';
import LittleLemonFooter from './component/LittleLemonFooter';
import WelcomeScreen from './component/WelcomeScreen';
import LoginScreen from './component/LoginScreen';
import MenuItems from './component/MenuItems';

export default function App() {
  return (
    <>
    <View style={styles.header}>
      <LittleLemonHeader/>
      <LoginScreen/>
    </View>
        <View style={styles.footer}>
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
