import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'NextLesson2Screen1'>;

const NextLesson2Screen1 = () => {
  const navigation = useNavigation<NavigationProp>();

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
          многие люди общаются, делятся{'\n'}
          новостями, узнают что-то новое, находят{'\n'}
          нужную информацию через соц.сети.
        </Text>

        <Text style={styles.text3}>
          самые известные:{"\n"}
          {"\u2022"} Instagram (Инстаграм) {"\n"}
          {"\u2022"} Facebook (Фейсбук)
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('NextLesson2Screen2', { step: 2 })}
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

export default NextLesson2Screen1;
