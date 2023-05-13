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
      backgroundColor: '#F4CE14',
    },
    texto: {
        padding: 40,
        fontSize: 40,
        color: 'black',
        justifyContent: 'center',
        
    },
  });
  