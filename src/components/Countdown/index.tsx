import React from "react";
import { Text, View } from "react-native";
import { useCountdown } from "../../contexts/CountdownContext";
import { theme } from "../../theme";
import { styles } from "./styles";

export function Countdown() {
  const { minutes, seconds } = useCountdown();
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <View>
      <View style={styles.countdownContainer}>
        <View style={styles.numbersContainer}>
          <Text style={styles.numbers}>{minuteLeft}</Text>
        </View>
        <View style={styles.numbersContainer}>
          <Text style={styles.numbers}>{minuteRight}</Text>
        </View>
        <Text style={{ fontSize: 35, color: theme.colors.text }}>:</Text>
        <View style={styles.numbersContainer}>
          <Text style={styles.numbers}>{secondLeft}</Text>
        </View>
        <View style={styles.numbersContainer}>
          <Text style={styles.numbers}>{secondRight}</Text>
        </View>
      </View>
    </View>
  );
}
