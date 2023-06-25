import React, { useState } from 'react'; 

import { Button, StyleSheet, Text, View, ScrollView, Image, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const WelcomeScreen = ({ navigation }) => { 


  const [email, onChangeEmail] = useState(''); 
  const [password, onChangePassword] = useState(''); 

  
    return (

      <ScrollView keyboardDismissMode='on-drag' indicatorStyle={"white"} style={styles.container}>
      <View style={styles.headerWrapper}>
      <Image 
      style={styles.logo} 
      source={require('../assets/img/littlelemonlogo.png')}
      resizeMode="contain"
      accessible={true}
      accessibilityLabel='Little Lemon Logo'
      />
          <Text style={styles.title}>
            Little Lemon
            </Text>       
            </View>
            <Text style={styles.body}>
            Little Lemon is a charming neighborhood bistro 
          that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
          </Text>

          <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />

          <Image
        style={styles.image}
        source={require('../assets/img/img1.png')}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      />
      <Image
        style={styles.image}
        source={require('../assets/img/img2.png')}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      />
      <Image
        style={styles.image}
        source={require('../assets/img/img3.png')}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      />
      <Image
        style={styles.image}
        source={require('../assets/img/img4.png')}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      />
      </ScrollView>

    );
  };
  
  const styles = StyleSheet.create({
    logo: {
      height: 100,
      width: 100,
      borderRadius: 20,

    },
    headerWrapper: {
      flexDirection: 'row',
      justifyContent: 'center',
      margin: 10,
    },
    image: {
      width: 350,
      height: 250,
      borderRadius: 10,
    },
    container: {
      flex: 1,
      padding: 24,
      marginTop: 25,
      backgroundColor: '#333333',

    },
    title: {
      paddingRight: 10,
      paddingLeft: 20,
      paddingTop: 30,
      paddingBottom: 10,
      fontSize: 30,
      color: '#EDEFEE',
      textAlign: 'center',
      },
      body: {
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