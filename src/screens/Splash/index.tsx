import React, { useState } from "react";
import {
  Dimensions,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from "react-native";
import { Button } from "../../components/Button";
import { styles } from "./styles";
import Img from "../../assets/logo.png";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

export default function Splash() {
  const navigate = useNavigation();
  const [page, setPage] = useState(0);
  const { width, height } = Dimensions.get("window");

  function handleScroll(event: NativeSyntheticEvent<NativeScrollEvent>) {
    const scroll = Math.ceil(event.nativeEvent.contentOffset.x / width);
    if (scroll > Math.floor(scroll)) return;
    setPage(scroll);
  }

  return (
    <View style={styles.container}>
      <Image source={Img} style={{ paddingTop: 20 }} />
      <ScrollView
        horizontal={true}
        scrollEventThrottle={16}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
      >
        <View style={{ width, height }}>
          <Text style={styles.text}>
            Bem vindo ao Appomodore, um aplicativo que utiliza a técnica de
            Pomodore para te auxiliar no foco e concentração.
          </Text>
        </View>

        <View style={{ width, height }}>
          <Text style={styles.text}>
            Ao começar um ciclo, você terá 25 minutos de foco, ao completar você
            ganhará uma quantidade de experiência, podendo subir de nível, após
            completar um ciclo você pode aproveitar pra descansar 5 minutos
            antes de iniciar um novo ciclo.
          </Text>
        </View>

        <View style={{ width, height }}>
          <Text style={styles.text}>
            Caso você tenha escolhido parar um ciclo, você perderá uma
            quantidade de experiência, mas não se preocupe, você não cairá de
            nível.
          </Text>
        </View>
      </ScrollView>

      <View style={styles.pagecontainer}>
        {Array.from(Array(3).keys()).map((key, index) => (
          <View
            style={page === index ? styles.currentpage : styles.dot}
            key={index}
          />
        ))}
      </View>
      <View style={styles.btncontainer}>
        <Button
          title={page < 2 ? "Pular" : "Continuar"}
          onPress={() => navigate.navigate("Start" as never)}
        />
      </View>
    </View>
  );
}
