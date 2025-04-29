import 'react-native-gesture-handler';  // Импорт для поддержки жестов
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// Регистрация компонента приложения
AppRegistry.registerComponent(appName, () => App);
import { AppRegistry } from 'react-native';
import App from './App'; // или путь к вашему основному компоненту
import { name as appName } from './app.json'; // Имя приложения из app.json

AppRegistry.registerComponent(appName, () => App);
