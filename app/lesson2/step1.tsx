import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Step1() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.lessonBox}>
        <Text style={styles.lessonTitle}>Урок 2</Text>
      </View>

      <Text style={styles.mainTitle}>СОЦИАЛЬНЫЕ СЕТИ</Text>

      <View style={styles.textBox}>
        <View style={styles.textBox2}>
          <Text style={styles.text1}>ЗНАКОМСТВО</Text>
        </View>

        <Text style={styles.text2}>
          Многие люди общаются, делятся новостями, узнают что-то новое, находят нужную информацию через соц.сети.
        </Text>

        <Text style={styles.text3}>
          Самые известные:{"\n"}
          {"\u2022"} Instagram (Инстаграм) {"\n"}
          {"\u2022"} Facebook (Фейсбук)
        </Text>
      </View>

      <TouchableOpacity
              style={styles.button}
              onPress={() => router.push('/lesson2/step2')}
       >
        <Feather name="arrow-right" size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 27,
  },
  lessonBox: {
    backgroundColor: '#ff8000',
    paddingVertical: 20,
    paddingHorizontal: 135,
    borderRadius: 30,
    marginTop: 40,
  },
  lessonTitle: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#000',
  },
  mainTitle: {
    fontSize: 30,
    color: '#ff8000',
    fontWeight: 'bold',
    marginVertical: 22,
    textAlign: 'center',
  },
  textBox: {
    backgroundColor: '#ffe082',
    borderRadius: 15,
    padding: 25,
    marginVertical: 13,
    width: '100%',
  },
  textBox2: {
    backgroundColor: '#fffde7',
    borderRadius: 15,
    padding: 15,
    marginBottom: 13,
    width: '105%',
  },
  text1: {
    fontSize: 18,
    color: '#ff8000',
  },
  text2: {
    fontSize: 18,
    color: '#333',
  },
  text3: {
    fontSize: 18,
    color: '#ff8000',
    textAlign: 'left',
    marginBottom: 13,
  },
  button: {
    backgroundColor: '#ff8000',
    padding: 25,
    borderRadius: 35,
    marginTop: 10,
    paddingHorizontal: 60,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  }
});


