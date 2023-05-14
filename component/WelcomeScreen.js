import * as React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

export default function WelcomeScreen() {
    return (
      <ScrollView indicatorStyle={"white"} style={styles.vista}>
          <Text style={styles.texto1}>
            Welcome to Little Lemon
            </Text>       
            <Text style={styles.texto2}>
            Little Lemon is a charming neighborhood bistro 
          that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
   
          </Text>
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
      vista: {
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
    });
    