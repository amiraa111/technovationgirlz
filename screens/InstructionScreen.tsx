import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Speech from 'expo-speech';

export default function InstructionScreen() {
  useEffect(() => {
    Speech.speak('Инструкция');
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Инструкция</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9E5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
