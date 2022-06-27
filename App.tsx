import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import { theme } from "./src/theme";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { Routes } from "./src/routes";
import { CountdownProvider } from "./src/contexts/CountdownContext";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_400Regular,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;
  return (
    <View
      onLayout={onLayoutRootView}
      style={{ flex: 1, backgroundColor: theme.colors.background }}
    >
      <StatusBar style="light" translucent />

      <CountdownProvider>
        <Routes />
      </CountdownProvider>
    </View>
  );
}
