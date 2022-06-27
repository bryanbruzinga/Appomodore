import React, { useState } from "react";
import { Image, Text, TextInput, View } from "react-native";
import { Button } from "../../components/Button";
import { styles } from "./styles";
import logo from "../../assets/logo.png";
import { useCountdown } from "../../contexts/CountdownContext";

export default function Start() {
  const [currentName, setCurrentName] = useState("");
  const { setName } = useCountdown();

  function start() {
    setName(currentName);
  }

  return (
    <View style={styles.container}>
      <Image source={logo} style={{ height: 200, width: 200 }} />
      <Text style={styles.title}>Bem vindo</Text>
      <Text style={styles.subtitle}>Vamos começar?</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome para começar"
        placeholderTextColor="#fff"
        keyboardType="default"
        onChangeText={(value) => setCurrentName(value)}
      />
      {currentName.length > 3 && <Button title="Começar" onPress={start} />}
    </View>
  );
}
