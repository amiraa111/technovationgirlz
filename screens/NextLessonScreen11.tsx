import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function NextLessonScreen11() {
  const navigation = useNavigation<NavigationProp>();

  const handleExit = () => {
    navigation.navigate('Home'); // заменить на ваш главный экран
  };

  return (
    <View style={styles.container}>
      {/* Кнопка выхода в верхнем левом углу */}
      <TouchableOpacity style={styles.exitButton} onPress={handleExit}>
        <Feather name="arrow-left" size={28} color="red" />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>Поздравляем!</Text>
        <Text style={styles.text}>
          Вы успешно прошли 1 урок по теме{'\n'}
          «Мошенничество». Теперь вы знаете, как{'\n'}
          распознать обман и защитить себя.
        </Text>

        <TouchableOpacity style={styles.homeButton} onPress={handleExit}>
          <Text style={styles.homeButtonText}>На главный экран</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 50,
  },
  exitButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4CAF50',
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 40,
  },
  homeButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  homeButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

