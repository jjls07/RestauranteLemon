import React, { useState } from 'react'; 

import { StyleSheet, Text, ScrollView, TextInput, KeyboardAvoidingView, Platform } from 'react-native';

const WelcomeScreen = () => {


  const [firstName, onChangeFirstName] = useState(''); 

  
    return (
      <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
      <ScrollView keyboardDismissMode='on-drag' indicatorStyle={"white"} style={styles.container}>
          <Text style={styles.texto1}>
            Welcome to Little Lemon
            </Text>       
            <Text style={styles.texto2}>
            Little Lemon is a charming neighborhood bistro 
          that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
          </Text>
          <TextInput
        style={styles.input}
        onChangeText={onChangeFirstName}
        value={firstName}
      />
      </ScrollView>
      </KeyboardAvoidingView>
    );
  };
  
  const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      texto1: {
        padding: 40,
        fontSize: 35,
        color: '#EDEFEE',
        textAlign: 'center',
      },
      texto2: {
        fontSize: 25,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
      },

      input: { 
            height: 40, 
            margin: 12, 
            borderWidth: 1, 
            padding: 10, 
            fontSize: 16, 
            backgroundColor: '#EDEFEE', 
          }, 
    });

    
    export default WelcomeScreen; 