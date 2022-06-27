import { createStackNavigator } from "@react-navigation/stack";
import Splash from "../screens/Splash";
import Start from "../screens/Start";

const { Navigator, Screen } = createStackNavigator();

export function StartRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Splash" component={Splash} />
      <Screen name="Start" component={Start} />
    </Navigator>
  );
}
