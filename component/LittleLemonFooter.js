import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function LittleLemonFooter() {
  return (
    <View style={styles.vista}>
        <Text style={styles.texto}>
        Todos los Derechos Reservados, 2022{' '}
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    vista: {
      marginBottom: 10,
      backgroundColor: '#F4CE14',
    },
    texto: {
      fontSize: 18,
      color: 'black',
      textAlign: 'center',
    },
  });
  