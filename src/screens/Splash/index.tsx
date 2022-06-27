import React from "react";
import { Image, Text, View } from "react-native";
import { Button } from "../../components/Button";
import { styles } from "./styles";
import Img from "../../assets/logo.png";
import { useNavigation } from "@react-navigation/native";

export default function Splash() {
  const navigate = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={Img} />
      <Text style={styles.subtitle}>
        Tenha maior concentração e foco utilizando a técnica de Pomodoro.
      </Text>

      <Button
        title="Vamos lá"
        onPress={() => navigate.navigate("Start" as never)}
      />
    </View>
  );
}
