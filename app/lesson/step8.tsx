import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

interface Answer {
  text: string;
  isCorrect: boolean;
}

export default function NextLessonScreen8() {
  const router = useRouter();

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);

  const answers: Answer[] = [
    { text: 'проигнорирую сообщение', isCorrect: true },
    { text: 'уточню детали', isCorrect: false },
    { text: 'оплачу комиссию, чтобы получить приз', isCorrect: false },
  ];

  const handleAnswer = (index: number) => {
    if (answered) return;
    setSelectedIndex(index);
    setAnswered(true);
  };

  const getButtonStyle = (index: number, isSelected: boolean, isCorrectAnswer: boolean) => {
    const buttonStyle = [styles.answerButton];

    if (answered) {
      if (isSelected && isCorrectAnswer) {
        buttonStyle.push(styles.correct);
      } else if (isSelected && !isCorrectAnswer) {
        buttonStyle.push(styles.incorrect);
      } else if (!isSelected && isCorrectAnswer) {
        buttonStyle.push(styles.correct);
      }
    }

    return buttonStyle;
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
          Вы получили сообщение о крупном выигрыше,{'\n'}
          нужно оплатить комиссию для получения приза.{'\n'}
          Что вы сделаете?
        </Text>

        {answers.map((answer, index) => {
          const isSelected = selectedIndex === index;
          return (
            <TouchableOpacity
              key={index}
              style={getButtonStyle(index, isSelected, answer.isCorrect)}
              onPress={() => handleAnswer(index)}
              disabled={answered}
            >
              <Text style={styles.answerText}>{answer.text}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {answered && (
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => router.push('/next-lesson-9')}
        >
          <Feather name="arrow-right" size={24} color="white" />
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
    width: '100%',
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
  text5: {
    fontSize: 14,
    color: '#555',
  },
  answerButton: {
    backgroundColor: '#FFCC80',
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#FFB300',
  },
  answerText: {
    fontSize: 16,
  },
  correct: {
    backgroundColor: '#81C784',
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#FFB300',
  },
  incorrect: {
    backgroundColor: '#E57373',
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#FFB300',
  },
  nextButton: {
    backgroundColor: '#F57C00',
    padding: 18,
    borderRadius: 50,
    alignSelf: 'flex-end',
    marginTop: 25,
  },
});