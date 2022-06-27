import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
  },

  subtitle: {
    color: theme.colors.title,
    fontSize: 18,
    textAlign: "center",
    fontFamily: theme.fonts.medium,
    marginBottom: 25,
  },
});
