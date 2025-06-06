import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'NextLesson2Screen3'>;

export default function NextLesson2Screen3() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.lessonbox2}>
        <View style={styles.lessonBox}>
          <Text style={styles.lessonTitle}>урок 2</Text>
        </View>
      </View>

      <Text style={styles.mainTitle}>СОЦИАЛЬНЫЕ СЕТИ</Text>

      <View style={styles.textBox}>
        <View style={styles.textBox2}>
          <Text style={styles.text1}>
            INSTAGRAM (ИНСТАГРАМ)
          </Text>
        </View>

        <Text style={styles.text2}>
          истории:{'\n'}
          <Text style={styles.text3}>
            короткие публикации, исчезающие через 24 часа{'\n'}
          </Text>
        </Text>

        <Text style={styles.text2}>
          просмотр ленты:{'\n'}
          <Text style={styles.text3}>
            видите фотографии и видео людей,{'\n'}
            на которых вы подписаны{'\n'}
          </Text>
        </Text>

        <Text style={styles.text2}>
          публикации:{'\n'}
          <Text style={styles.text3}>
            возможность делиться своими снимками и видео{'\n'}
          </Text>
        </Text>

        <Text style={styles.text2}>
          чаты:{'\n'}
          <Text style={styles.text3}>
            переписки с другими пользователями{'\n'}
          </Text>
        </Text>

        <Text style={styles.text2}>
          поиск:{'\n'}
          <Text style={styles.text3}>
            возможность находить разных людей, компании,{'\n'}
            группы и темы{'\n'}
          </Text>
        </Text>
      </View>

      <View style={styles.dashedLine}></View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('NextLesson2Screen4')}
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
    paddingHorizontal: 0,
    paddingTop: -10,
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

