import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function NextLessonScreen2() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Урок 3</Text>
      <Text style={styles.text}>
        Здесь продолжение обучения. Молодец, что дошёл сюда!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffbe5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ff8000',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
  },
});
