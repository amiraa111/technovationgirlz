import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const Lesson2Index: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.lessonBox}>
        <Text style={styles.lessonTitle}>Урок 2</Text>
      </View>

      <Text style={styles.mainTitle}>СОЦИАЛЬНЫЕ СЕТИ</Text>

      <View style={styles.textBox}>
        <Text style={styles.text}>
          Мы поможем вам:{"\n"}
          {"\u2022"} понять их основные функции{"\n"}
          {"\u2022"} научиться регистрации{"\n"}
          {"\u2022"} публиковать посты{"\n"}
          {"\u2022"} настраивать аккаунт{"\n"}
        </Text>
      </View>

      <View style={styles.textBox}>
        <Text style={styles.warningTitle}>ПРЕДУПРЕЖДЕНИЕ!</Text>
        <Text style={styles.text}>
          На этот урок у вас может уйти чуть больше{"\n"}
          времени, чем на прошлый урок.{"\n"}
          Приготовьтесь, делайте перерывы!
        </Text>
      </View>

      <TouchableOpacity
              style={styles.button}
              onPress={() => router.push('/lesson2/step1')}
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
  text: {
    fontSize: 18,
    color: '#333',
  },
  warningTitle: {
    fontSize: 25,
    color: '#ff8000',
    fontWeight: 'bold',
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
  }
});

export default Lesson2Index;

