import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import LessonScreen from './screens/LessonScreen';
import NextLessonScreen1 from './screens/NextLessonScreen1';
import NextLessonScreen2 from './screens/NextLessonScreen2';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LessonScreen" component={LessonScreen} />
        <Stack.Screen name="NextLessonScreen1" component={NextLessonScreen1} />
        <Stack.Screen name="NextLessonScreen2" component={NextLessonScreen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

