import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Animated,
  Dimensions,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");
const AnimatedPath = Animated.createAnimatedComponent(Path);

export default function HomeScreen() {
  const steps: number[] = [1, 2, 3, 4, 5];
  const animatedValues = steps.map(() => new Animated.Value(0));
  const router = useRouter();

  useEffect(() => {
    Animated.stagger(
      300,
      animatedValues.map((anim) =>
        Animated.timing(anim, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        })
      )
    ).start();
  }, []);

  const positions: { x: number; y: number }[] = [
    { x: 100, y: 150 },
    { x: width - 100, y: 150 },
    { x: 100, y: 350 },
    { x: width - 100, y: 350 },
    { x: 100, y: 550 },
  ];

  return (
    <View style={styles.container}>
      {/* Верхняя панель */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.topButton}>
          <Text style={styles.topButtonText}>⚙️</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.topButton}>
          <Text style={styles.topButtonText}>Инструкция</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.topButton}>
          <Text style={styles.topButtonText}>Поддержка</Text>
        </TouchableOpacity>
      </View>

      {/* Панель заголовка */}
      <View style={styles.headerBar}>
        <TouchableOpacity>
          <Text style={styles.arrow}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Обучение</Text>
        <TouchableOpacity>
          <Text style={styles.arrow}>{">"}</Text>
        </TouchableOpacity>
      </View>

      {/* Лестница обучения */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {steps.map((step, index) => {
          const startX = positions[index].x;
          const startY = positions[index].y;
          return (
            <View key={index}>
              <View
                style={[
                  styles.stepRow,
                  {
                    justifyContent:
                      index % 2 === 0 ? "flex-start" : "flex-end",
                  },
                ]}
              >
                <Animated.View
                  style={[
                    styles.step,
                    {
                      opacity: animatedValues[index],
                      transform: [{ scale: animatedValues[index] }],
                    },
                  ]}
                >
                  <TouchableOpacity
                    onPress={() => {
                      if (index < 1) {
                        router.push("/lesson");
                      } else {
                        router.push("/lesson2");
                      }
                    }}
                  >
                    <Text style={styles.stepText}>{step}</Text>
                  </TouchableOpacity>
                </Animated.View>
              </View>

              {/* Линия между шагами */}
              {index !== steps.length - 1 && (
                <Svg height="200" width={width} style={styles.line}>
                  <AnimatedPath
                    d={`M${startX},${startY} 
                      C${(startX + positions[index + 1].x) / 2},${startY + 50} 
                      ${(startX + positions[index + 1].x) / 2},${
                      positions[index + 1].y - 50
                    } 
                      ${positions[index + 1].x},${positions[index + 1].y}`}
                    stroke="#e65100"
                    strokeWidth="5"
                    fill="none"
                    opacity={animatedValues[index]}
                  />
                </Svg>
              )}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe082",
    padding: 20,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 5,
    marginTop: 45,
  },
  topButton: {
    backgroundColor: "#e65100",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  topButtonText: {
    fontSize: 19,
    fontWeight: "600",
    color: "white",
  },
  headerBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#e65100",
    marginHorizontal: 10,
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
  },
  arrow: {
    fontSize: 34,
    color: "#e65100",
  },
  scrollContainer: {
    paddingBottom: 300,
  },
  stepRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 30,
  },
  step: {
    backgroundColor: "#e65100",
    width: 120,
    height: 120,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  stepText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
  },
  line: {
    position: "absolute",
    top: 300,
  },
});
