import React from "react";
import { Text, View } from "react-native";
import { useCountdown } from "../../contexts/CountdownContext";
import { theme } from "../../theme";

export function Profile() {
  const { name, level } = useCountdown();

  return (
    <View>
      <Text style={{ color: theme.colors.text }}>{name}</Text>
      <Text style={{ color: theme.colors.text }}>Nível {level}</Text>
    </View>
  );
}
