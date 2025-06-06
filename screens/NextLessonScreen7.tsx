import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types/navigation';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'NextLessonScreen7'>;

interface AnswerOption {
  text: string;
  isCorrect: boolean;
}

export default function NextLessonScreen7() {
  const navigation = useNavigation<NavigationProp>();

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);

  const answers: AnswerOption[] = [
    { text: 'выдам им всю информацию, которую попросят', isCorrect: false },
    { text: 'положу трубку и перезвоню в свой банк', isCorrect: true },
    { text: 'попытаюсь выяснить в разговоре', isCorrect: false },
  ];

  const handleAnswer = (index: number) => {
    if (answered) return;
    setSelectedIndex(index);
    setAnswered(true);
  };

  const getButtonStyle = (index: number, isSelected: boolean, isCorrect: boolean) => {
    const style = [styles.answerButton];
    if (answered) {
      if (isSelected && isCorrect) style.push(styles.correct);
      else if (isSelected && !isCorrect) style.push(styles.incorrect);
      else if (!isSelected && isCorrect) style.push(styles.correct);
    }
    return style;
  };

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
          <Text style={styles.text1}>ЗАДАНИЯ</Text>
          <Text style={styles.text5}>выберите правильный ответ</Text>
        </View>

        <Text style={styles.text2}>
          Вам позвонили и сказали, что с вашей карты{'\n'}
          пытаются украсть деньги. Что вы сделаете?
        </Text>

        {answers.map((answer, index) => {
          const isSelected = selectedIndex === index;
          const buttonStyle = getButtonStyle(index, isSelected, answer.isCorrect);

          return (
            <TouchableOpacity
              key={index}
              style={buttonStyle}
              onPress={() => handleAnswer(index)}
              disabled={answered}
            >
              <Text style={styles.answerText}>{answer.text}</Text>
            </TouchableOpacity>
          );
        })}

        {answered && (
          <Text style={[styles.feedbackText, {
            color: answers[selectedIndex!].isCorrect ? '#388E3C' : '#D32F2F'
          }]}>
            {answers[selectedIndex!].isCorrect
              ? 'Верно! Это правильный ответ.'
              : 'Неправильно. Никогда не доверяйте звонкам от "банков".'}
          </Text>
        )}
      </View>

      {answered && (
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate('NextLessonScreen8')}
        >
          <Feather name="arrow-right" size={28} color="white" />
        </TouchableOpacity>
      )}
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
    marginTop: 15,
    marginBottom: 3,
    width: '100%',
    paddingBottom: 18,
  },
  lessonTitle: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  mainTitle: {
    fontSize: 32,
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
    alignSelf: 'stretch',
  },
  text1: {
    fontSize: 20,
    color: '#ff8000',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  text2: {
    fontSize: 20,
    color: '#333',
    marginTop: 12,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  text5: {
    fontSize: 16,
    color: '#666',
  },
  answerButton: {
    backgroundColor: '#FFECB3',
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#FFB300',
  },
  answerText: {
    fontSize: 18,
    color: '#333',
  },
  correct: {
    backgroundColor: '#A5D6A7',
  },
  incorrect: {
    backgroundColor: '#EF9A9A',
  },
  feedbackText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
  },
  nextButton: {
    backgroundColor: '#F57C00',
    padding: 18,
    borderRadius: 50,
    alignSelf: 'flex-end',
    marginTop: 25,
  },
});
