import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useCountdown } from "../contexts/CountdownContext";
import { StartRoutes } from "./start.routes";
import { AppRoutes } from "./app.routes";

export function Routes() {
  const { name } = useCountdown();

  if (!!name) {
    return (
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    );
  } else
    return (
      <NavigationContainer>
        <StartRoutes />
      </NavigationContainer>
    );
}
