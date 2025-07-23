import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function step4() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.lessonBox}>
        <Text style={styles.lessonTitle}>Урок 2</Text>
      </View>

      <Text style={styles.mainTitle}>СОЦИАЛЬНЫЕ СЕТИ</Text>

      <View style={styles.textBox}>
        <View style={styles.textBox2}>
          <Text style={styles.text1}>INSTAGRAM (ИНСТАГРАМ)</Text>
        </View>

        <Text style={styles.text1}>КАК ЗАРЕГИСТРИРОВАТЬСЯ?</Text>

        <Text style={styles.text2}>
          1. Установить приложение, войти в него{'\n'}
          2. Нажмите на "Создать новый аккаунт", если у вас{'\n'}
          его нет, но если вы уже имели аккаунт и помните{'\n'}
          от него данные для входа, то нажимайте{'\n'}
          "Войти в существующий аккаунт"
        </Text>

        <View style={styles.dashedLine}></View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/lesson2/step5')}
      >
        <Feather name="arrow-right" size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
}

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
    fontWeight: 'bold',
    textAlign: 'left',
  },
  text2: {
    fontSize: 18,
    color: '#333',
    marginTop: 5,
    fontWeight: 'bold',
    marginBottom: 13,
  },
  dashedLine: {
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    alignSelf: 'stretch',
    borderStyle: 'dashed',
    marginVertical: 10,
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
  },
});