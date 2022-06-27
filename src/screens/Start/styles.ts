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
  title: {
    color: theme.colors.title,
    fontSize: 35,
    textAlign: "center",
    fontFamily: theme.fonts.regular,
    marginBottom: 25,
  },
  subtitle: {
    color: theme.colors.title,
    fontSize: 24,
    textAlign: "center",
    fontFamily: theme.fonts.regular,
    marginBottom: 25,
  },

  input: {
    borderBottomColor: theme.colors.text,
    borderBottomWidth: 1,
    width: "78%",
    padding: 10,
    color: theme.colors.text,
    marginBottom: 15,
  },
});
