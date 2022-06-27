import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { useCountdown } from "../../contexts/CountdownContext";
import { Button } from "../Button";

export function LevelUpModal() {
  const { setIsLevelUpModalOpen, level } = useCountdown();
  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <AntDesign name="staro" size={24} color="#FFA737" />
          <Text style={styles.level}>{level}</Text>
          <AntDesign name="staro" size={24} color="#FFA737" />
        </View>
        <Text style={styles.congrats}>Parabéns</Text>
        <Text style={styles.text}>Você alcançou um novo nível.</Text>
        <Button title="Fechar" onPress={() => setIsLevelUpModalOpen(false)} />
      </View>
    </View>
  );
}
