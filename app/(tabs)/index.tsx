import React, { useEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet, Image, ScrollView } from "react-native";
import * as Speech from "expo-speech";
import { useNavigation } from "@react-navigation/native";

import { useAppContext } from "../appcontext";
import {useRouter} from "expo-router";
const router=useRouter();
export default function HomeScreen() {
  const navigation = useNavigation();
  const { fontSize, isKazakh } = useAppContext();
  const [currentCategory, setCurrentCategory] = useState(0);

  const speak = (text: string) => {
    Speech.speak(text, {
      rate: 0.9,
      language: isKazakh ? "kk-KZ" : "ru-RU",
    });
  };

  useEffect(() => {
    speak(isKazakh ? "Басты бет" : "Главная страница");
  }, [isKazakh]);

  // Categories for the horizontal scroll section
  const categories = [
    { nameRu: "практика", nameKz: "практика" },
    { nameRu: "категория 2", nameKz: "санат 2" },
    { nameRu: "категория 3", nameKz: "санат 3" },
  ];

  // App buttons for the grid layout
  const appButtons = [
    {
      name: "Telegram",
      image: require("../../assets/images/telegram.jpg"), // You'll need to add this image
    },
    {
      name: "WhatsApp",
      image: require("../../assets/images/whatsapp.jpg"),
    },
    {
      name: "Facebook",
      image: require("../../assets/images/facebook.jpg"), // You'll need to add this image
    },
    {
      name: "YouTube",
      image: require("../../assets/images/youtube.jpg"),
    },
    {
      name: "Kaspi", // Helping app icon from the second image
      image: require("../../assets/images/kaspi.jpg"), // You'll need to add this image
    },
    {
      name: "Телефон", // Phone icon from the second image
      image: require("../../assets/images/telephone.jpg"), // You'll need to add this image
    },
  ];

  const navigateToCategory = (direction: number) => {
    const newIndex = currentCategory + direction;
    if (newIndex >= 0 && newIndex < categories.length) {
      setCurrentCategory(newIndex);
      speak(isKazakh ? categories[newIndex].nameKz : categories[newIndex].nameRu);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Pressable 
          style={styles.settingsIcon}
          onPress={() => {
            speak(isKazakh ? "Баптаулар" : "Настройки");
            router.push("/settings");
          }}
        >
          <Image
            source={require("../../assets/images/settings.jpg")} // You'll need to add this image
            style={styles.iconSmall}
          />
        </Pressable>
        
        <Pressable
          style={styles.headerButton}
          onPress={() => {
            speak(isKazakh ? "Нұсқаулық" : "Инструкция");
            router.push("/instruction");
          }}
        >
          <Text style={[styles.headerButtonText, { fontSize }]}>
            {isKazakh ? "Нұсқаулық" : "Инструкция"}
          </Text>
        </Pressable>

        <Pressable
          style={styles.headerButton}
          onPress={() => {
            speak(isKazakh ? "Қолдау" : "Поддержка");
            router.push("/support");
          }}
        >
          <Text style={[styles.headerButtonText, { fontSize }]}>
            {isKazakh ? "Қолдау" : "Поддержка"}
          </Text>
        </Pressable>
      </View>
      {/* Category Navigation Section */}
      <View style={styles.categorySection}>
        <Pressable 
          style={styles.navArrow}
          onPress={() => navigateToCategory(-1)}
        >
          <Text style={styles.arrowText}>{"<"}</Text>
        </Pressable>
        
        <View style={styles.categoryTextContainer}>
          <Text style={[styles.categoryText, { fontSize }]}>
            {isKazakh ? categories[currentCategory].nameKz : categories[currentCategory].nameRu}
          </Text>
        </View>
        
        <Pressable 
          style={styles.navArrow}
          onPress={() => navigateToCategory(1)}
        >
          <Text style={styles.arrowText}>{">"}</Text>
        </Pressable>
      </View>

      {/* Apps Grid Section */}
      <ScrollView>
        <View style={styles.appsGrid}>
          {appButtons.map((item, index) => (
            <Pressable
              key={index}
              style={styles.appIconWrapper}
              onPress={() => speak(item.name)}
            >
              <Image source={item.image} style={styles.appIcon} />
              <Text style={[styles.iconLabel, { fontSize: fontSize - 4 }]}>{item.name}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF9E5",
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: "#FFDA69",
    paddingBottom: 10,
  },
  settingsIcon: {
    position: "absolute",
    left: 20,
    top: 20,
  },
  headerButton: {
    backgroundColor: "#FFDA69",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginLeft: 10,
  },
  headerButtonText: {
    color: "#000",
    fontWeight: "bold",
  },
  categorySection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#FFF",
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 25,
  },
  navArrow: {
    padding: 10,
  },
  arrowText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFDA69",
  },
  categoryTextContainer: {
    flex: 1,
    alignItems: "center",
  },
  categoryText: {
    fontWeight: "bold",
    color: "#000",
  },
  appsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  appIconWrapper: {
    alignItems: "center",
    width: "33%", // Three icons per row
    marginBottom: 20,
    padding: 5,
  },
  appIcon: {
    width: 60,
    height: 60,
    borderRadius: 12,
  },
  iconLabel: {
    marginTop: 5,
    color: "#000",
    textAlign: "center",
  },
  iconSmall: {
    width: 30,
    height: 30,
  },
});