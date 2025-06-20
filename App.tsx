import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './navigation/types';

// Импорт экранов
import HomeScreen from './screens/HomeScreen';
import InstructionScreen from './screens/InstructionScreen';
import LessonScreen from './screens/LessonScreen';
import Lesson2Screen from './screens/Lesson2Screen';
import NextLessonScreen1 from './screens/NextLessonScreen1';
import NextLessonScreen2 from './screens/NextLessonScreen2';
import NextLessonScreen3 from './screens/NextLessonScreen3';
import NextLessonScreen4 from './screens/NextLessonScreen4';
import NextLessonScreen5 from './screens/NextLessonScreen5';
import NextLessonScreen6 from './screens/NextLessonScreen6';
import NextLessonScreen7 from './screens/NextLessonScreen7';
import NextLessonScreen8 from './screens/NextLessonScreen8';
import NextLessonScreen9 from './screens/NextLessonScreen9';
import NextLessonScreen10 from './screens/NextLessonScreen10';
import NextLessonScreen11 from './screens/NextLessonScreen11';
import NextLesson2Screen1 from './screens/NextLesson2Screen1';
import NextLesson2Screen2 from './screens/NextLesson2Screen2';
import NextLesson2Screen3 from './screens/NextLesson2Screen3';
import NextLesson2Screen4 from './screens/NextLesson2Screen4';
import NextLesson2Screen5 from './screens/NextLesson2Screen5';
import NextLesson2Screen6 from './screens/NextLesson2Screen6';
import NextLesson2Screen7 from './screens/NextLesson2Screen7';
import NextLesson2Screen8 from './screens/NextLesson2Screen8';
import NextLesson2Screen9 from './screens/NextLesson2Screen9';
import NextLesson2Screen10 from './screens/NextLesson2Screen10';
import NextLesson2Screen11 from './screens/NextLesson2Screen11';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        id={undefined} // ✅ 👈 ДОБАВЛЕНО ЭТО — чтобы убрать ошибку
        initialRouteName="HomeScreen"
        screenOptions={{ headerShown: false }}
      >
        {/* Главный экран и инструкции */}
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="InstructionScreen" component={InstructionScreen} />

        {/* Урок 1 */}
        <Stack.Screen name="LessonScreen" component={LessonScreen} />
        <Stack.Screen name="NextLessonScreen1" component={NextLessonScreen1} />
        <Stack.Screen name="NextLessonScreen2" component={NextLessonScreen2} />
        <Stack.Screen name="NextLessonScreen3" component={NextLessonScreen3} />
        <Stack.Screen name="NextLessonScreen4" component={NextLessonScreen4} />
        <Stack.Screen name="NextLessonScreen5" component={NextLessonScreen5} />
        <Stack.Screen name="NextLessonScreen6" component={NextLessonScreen6} />
        <Stack.Screen name="NextLessonScreen7" component={NextLessonScreen7} />
        <Stack.Screen name="NextLessonScreen8" component={NextLessonScreen8} />
        <Stack.Screen name="NextLessonScreen9" component={NextLessonScreen9} />
        <Stack.Screen name="NextLessonScreen10" component={NextLessonScreen10} />
        <Stack.Screen name="NextLessonScreen11" component={NextLessonScreen11} />

        {/* Урок 2 */}
        <Stack.Screen name="Lesson2Screen" component={Lesson2Screen} />
        <Stack.Screen name="NextLesson2Screen1" component={NextLesson2Screen1} />
        <Stack.Screen name="NextLesson2Screen2" component={NextLesson2Screen2} />
        <Stack.Screen name="NextLesson2Screen3" component={NextLesson2Screen3} />
        <Stack.Screen name="NextLesson2Screen4" component={NextLesson2Screen4} />
        <Stack.Screen name="NextLesson2Screen5" component={NextLesson2Screen5} />
        <Stack.Screen name="NextLesson2Screen6" component={NextLesson2Screen6} />
        <Stack.Screen name="NextLesson2Screen7" component={NextLesson2Screen7} />
        <Stack.Screen name="NextLesson2Screen8" component={NextLesson2Screen8} />
        <Stack.Screen name="NextLesson2Screen9" component={NextLesson2Screen9} />
        <Stack.Screen name="NextLesson2Screen10" component={NextLesson2Screen10} />
        <Stack.Screen name="NextLesson2Screen11" component={NextLesson2Screen11} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
