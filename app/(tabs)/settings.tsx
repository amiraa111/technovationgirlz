import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert, Switch } from "react-native";
import Slider from "@react-native-community/slider";
import * as Speech from "expo-speech";
import { useAppContext } from "../appcontext"; // Import the context hook

export default function SettingsScreen() {
  // Use the global settings instead of local states
  const { fontSize, isKazakh, setFontSize, setIsKazakh } = useAppContext();

  // Function for text-to-speech
  const speak = (text: string) => {
    Speech.speak(text, {
      rate: 0.9,
      language: isKazakh ? "kk-KZ" : "ru-RU",
    });
  };

  useEffect(() => {
    speak(isKazakh ? "Баптаулар экраны" : "Экран настроек");
  }, [isKazakh]);

  const settingsList: string[] = [
    isKazakh ? "Түстер схемасы" : "Цветовая тема",
    isKazakh ? "Есту аппаратының қолдауы" : "Поддержка слуховых аппаратов",
    isKazakh ? "Экран жарықтығы" : "Яркость экрана",
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.headerText, { fontSize }]}>
          {isKazakh ? 'Баптаулар' : 'Настройки'}
        </Text>
      </View>
      <ScrollView contentContainerStyle={styles.list}>
        <View style={styles.setting}>
          <Text style={[styles.settingText, { fontSize }]}>
            {isKazakh ? 'Қаріп өлшемі' : 'Размер шрифта'}
          </Text>
          <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={16}
            maximumValue={32}
            step={1}
            value={fontSize}
            onValueChange={(value: number) => {
              setFontSize(value);
              speak(`${isKazakh ? 'Қаріп өлшемі' : 'Размер шрифта'}: ${value}px`);
            }}
            minimumTrackTintColor="#FBC02D"
            maximumTrackTintColor="#D6D6D6"
          />
          <Text style={[styles.fontSizeText, { fontSize }]}>{fontSize}px</Text>
        </View>

        <View style={styles.setting}>
          <Text style={[styles.settingText, { fontSize }]}>
            {isKazakh ? 'Тіл' : 'Язык'}
          </Text>
          <Text style={[styles.languageText, { fontSize }]}>
            {isKazakh ? 'Қазақ' : 'Русский'}
          </Text>
          <Switch
            value={isKazakh}
            onValueChange={(value: boolean) => {
              setIsKazakh(value);
              speak(value ? 'Қазақ тілі таңдалды' : 'Выбран русский язык');
            }}
            thumbColor={isKazakh ? '#FBC02D' : '#D6D6D6'}
            trackColor={{ false: '#D6D6D6', true: '#FBC02D' }}
          />
        </View>

        {settingsList.map((item, index) => (
          <View key={index} style={styles.button}>
            <Text
              style={[styles.buttonText, { fontSize }]}
              onPress={() => {
                speak(item);
                Alert.alert(`Открываем: ${item}`);
              }}
            >
              {item}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

// Styles remain the same
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF9E5",
  },
  header: {
    backgroundColor: "#FBC02D",
    paddingVertical: 20,
    alignItems: "center",
    marginTop: 50,
  },
  headerText: {
    fontWeight: "bold",
    color: "#000",
  },
  list: {
    padding: 20,
  },
  setting: {
    backgroundColor: "#FFE082",
    padding: 15,
    borderRadius: 25,
    marginBottom: 15,
    alignItems: "center",
  },
  settingText: {
    color: "#000",
    marginBottom: 10,
  },
  fontSizeText: {
    marginTop: 5,
    color: "#000",
  },
  languageText: {
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000",
  },
  button: {
    backgroundColor: "#FFE082",
    padding: 15,
    borderRadius: 25,
    marginBottom: 15,
  },
  buttonText: {
    color: "#000",
    textAlign: "center",
  },
});