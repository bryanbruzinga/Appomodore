import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    marginVertical: 15,
    borderColor: theme.colors.title,
    borderWidth: 0.5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 16,
    fontFamily: theme.fonts.regular,
    color: theme.colors.text,
    textAlign: "center",
  },
});
