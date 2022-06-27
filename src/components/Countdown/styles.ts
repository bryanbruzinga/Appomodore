import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  countdownContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  numbersContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    marginHorizontal: 5,
    justifyContent: "space-evenly",
    backgroundColor: theme.colors.title,
    borderRadius: 5,
    textAlign: "center",
  },

  numbers: {
    fontWeight: "bold",
    fontFamily: theme.fonts.medium,
    fontSize: 40,
  },
});
