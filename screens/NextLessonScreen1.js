import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather'; // Импортируем Feather иконки

export default function NextLessonScreen1() {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <View style={styles.lessonBox}>
        <Text style={styles.lessonTitle}>урок 1</Text>
      </View>

      <Text style={styles.mainTitle}>МОШЕННИЧЕСТВО</Text>

      <View style={styles.textBox}>
        <View style={styles.textBox2}>
          <Text style={styles.text1}>
            КТО ТАКИЕ МОШЕННИКИ{'\n'}
            И КАК ОНИ РАБОТАЮТ?
          </Text>
        </View>

        <Text style={styles.text2}>
          Это люди, обманывающие других,{'\n'}
          чтобы получить деньги или личные данные.{'\n'}
          Они находят нас через случайные звонки,{'\n'}
          сообщения, электронные письма и{'\n'}
          поддельные сайты.{'\n'}
          Мошенники зачастую нацелены на тех, кто{'\n'}
          может быть менее знаком с современными технологиями{'\n'}
          и тех, кто более доверчив и уязвим.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('NextLessonScreen2')}
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
    marginTop: 50,
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
    width: '100%',
  },
  text1: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text2: {
    fontSize: 18,
    color: '#333',
    marginTop: 5,
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
