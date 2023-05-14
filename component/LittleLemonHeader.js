import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={styles.vista}>
        <Text style={styles.texto} numberOfLines={3}>
          Little Lemon
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    vista: {
      flex: 0.2,
      backgroundColor: '#EE9972',
    },
    texto: {
        padding: 30,
        fontSize: 40,
        color: 'black',
        justifyContent: 'center',
        
    },
  });
  