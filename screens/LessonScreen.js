import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

const LessonScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.lessonBox}>
        <Text style={styles.lessonTitle}>
          урок 1
        </Text>
      </View>

      <Text style={styles.mainTitle}>
       МОШЕННИЧЕСТВО
      </Text>

      <View style={styles.textBox}>
        <Text style={styles.text}>
          Это поможет вам:{"\n"}
          {"\u2022"} узнать, как мошенники обманывают{"\n"}
          {"\u2022"} научиться распознавать опасные звонки, сообщения и письма{"\n"}
          {"\u2022"} правильно вести себя, чтобы не попасться{"\n"}
          {"\u2022"} узнать простые правила, которые помогут сохранить ваши данные и деньги в безопасности
        </Text>
      </View>

      <View style={styles.textBox}>
        <Text style={styles.warningTitle}>
          НЕ ВОЛНУЙТЕСЬ!
        </Text>
        
        <Text style={styles.text}>
          защититься от мошенников можно легко. главное — быть внимательным и следовать простым запоминающимся советам
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('NextLessonScreen1')}
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

export default LessonScreen;
