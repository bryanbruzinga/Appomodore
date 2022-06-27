import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },

  bar: {
    flex: 1,
    height: 8,
    borderRadius: 8,
    backgroundColor: theme.colors.text,
    marginHorizontal: 20,
  },

  insideBar: {
    height: 8,
    borderRadius: 8,
    backgroundColor: theme.colors.green,
  },

  currentLevel: {
    position: "absolute",
    color: theme.colors.title,
    top: 15,
  },
});
