import React from "react";
import { View } from "react-native";
import { Button } from "../../components/Button";
import { Countdown } from "../../components/Countdown";
import { ExperienceBar } from "../../components/ExperienceBar";
import { LevelUpModal } from "../../components/LevelUpModal";
import { Profile } from "../../components/Profile";
import { useCountdown } from "../../contexts/CountdownContext";
import { theme } from "../../theme";

export default function Home() {
  const { startCountdown, isActive, stopCountdown, isLevelUpModalOpen } =
    useCountdown();

  return (
    <>
      {isLevelUpModalOpen && <LevelUpModal />}
      <View
        style={{
          backgroundColor: theme.colors.background,
          padding: 15,
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        <View style={{ paddingTop: 20 }}>
          <Profile />
          <ExperienceBar />
        </View>
        <Countdown />
        {isActive ? (
          <Button title="Parar o ciclo" onPress={stopCountdown} danger />
        ) : (
          <Button title="Iniciar um ciclo" onPress={startCountdown} />
        )}
      </View>
    </>
  );
}
