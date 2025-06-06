import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'NextLessonScreen2'>;

export default function NextLessonScreen2() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.lessonbox2}>
        <View style={styles.lessonBox}>
          <Text style={styles.lessonTitle}>урок 1</Text>
        </View>
      </View>

      <Text style={styles.mainTitle}>МОШЕННИЧЕСТВО</Text>

      <View style={styles.textBox}>
        <View style={styles.textBox2}>
          <Text style={styles.text1}>САМЫЕ РАСПРОСТРАНЕННЫЕ СХЕМЫ:</Text>
        </View>

        <Text style={styles.text2}>"ВАМ ЗВОНЯТ ИЗ БАНКА"</Text>

        <Text style={styles.text3}>
          Звонок от якобы сотрудника банка. Могут{'\n'}
          сообщить о подозрительной активности на карте.{'\n'}
          Просят срочно назвать данные карты,{'\n'}
          коды из СМС или почты. Часто запугивают{'\n'}
          блокировкой счёта!
        </Text>

        <View style={styles.dashedLine} />

        <Text style={styles.text4}>
          {'\u2022'} НИ В КОЕМ СЛУЧАЕ не сообщать никакие данные{'\n'}
          {'\u2022'} Прекратить разговор{'\n'}
          {'\u2022'} Перезвонить в свой банк по официальному номеру
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('NextLessonScreen3')}
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
  lessonbox2: {
    backgroundColor: '#ffe082',
    alignSelf: 'stretch',
    marginBottom: 3,
    marginTop: 15,
    paddingBottom: 18,
    width: '100%',
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
    marginVertical: 15,
  },
  textBox: {
    backgroundColor: '#ffe082',
    borderRadius: 15,
    padding: 30,
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
  text3: {
    fontSize: 16,
    color: '#ff8000',
    textAlign: 'left',
    marginBottom: 13,
  },
  text4: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'left',
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
