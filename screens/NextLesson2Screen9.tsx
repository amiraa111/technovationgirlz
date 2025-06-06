// Пример шаблона для NextLesson2Screen5.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function NextLesson2Screen9() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Экран NextLesson2Screen5</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  text: { fontSize: 20, color: '#333' },
});
