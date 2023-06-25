import React, { useState } from 'react'; 

import { ScrollView, Text, StyleSheet, TextInput, Pressable, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function LoginScreen({ navigation }) {

    const [email, onChangeEmail] = useState(''); 
    const [password, onChangePassword] = useState(''); 
    const [showLogin, setLogin] = useState(false);

  return (
    <ScrollView keyboardDismissMode='on-drag' style={styles.container}>
      <Image 
      style={styles.logo} 
      source={require('../assets/img/little_logo.png')}
      accessible={true}
      accessibilityLabel='Little Lemon Logo'
      />
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      <Text style={styles.regularText}>Login to continue </Text>
          <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        inputMode='email'
        placeholder='Email'
      />
        <TextInput
        secureTextEntry={ true }
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder='Password'
      />

<Pressable
        style={styles.button}
        onPress={() => {
          navigation.navigate('Welcome')
        }}>
        <Text style={styles.buttonText}>
          {'Iniciar Sesión'}
        </Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 300,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    padding: 24,
    marginTop: 25,
    backgroundColor: '#333333',
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
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

    button: {
      fontSize: 22,
      padding: 10,
      marginVertical: 8,
      margin: 100,
      backgroundColor: '#EE9972',
      borderColor: '#EE9972',
      borderWidth: 2,
      borderRadius: 50,
    },
    buttonText: {
      color: 'black',
      textAlign: 'center',
      fontSize: 25,
    },
});

