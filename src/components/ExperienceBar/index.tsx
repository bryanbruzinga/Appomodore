import React from "react";
import { Text, View } from "react-native";
import { useCountdown } from "../../contexts/CountdownContext";
import { theme } from "../../theme";
import { styles } from "./styles";

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useCountdown();

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <View style={styles.container}>
      <Text style={{ color: theme.colors.title }}>0 xp</Text>
      <View style={styles.bar}>
        <View style={[styles.insideBar, { width: `${percentToNextLevel}%` }]} />
        <Text style={[styles.currentLevel, { left: `${percentToNextLevel}%` }]}>
          {currentExperience} xp
        </Text>
      </View>
      <Text style={{ color: theme.colors.title }}>
        {experienceToNextLevel} xp
      </Text>
    </View>
  );
}
