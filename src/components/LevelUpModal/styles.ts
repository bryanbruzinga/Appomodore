import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  overlay: {
    backgroundColor: "rgba(0,0,0, .5)",
    position: "absolute",
    height: "100%",
    width: "100%",
    flex: 1,
    top: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },

  container: {
    backgroundColor: theme.colors.title,
    paddingHorizontal: 20,
    borderRadius: 10,
  },

  level: {
    fontSize: 40,
    fontWeight: "bold",
    color: theme.colors.green,
    textAlign: "center",
  },

  congrats: {
    fontSize: 18,
    color: theme.colors.background,
    fontWeight: "bold",
    textAlign: "center",
  },

  text: {
    fontSize: 16,
    color: theme.colors.background,
    marginTop: 10,
    textAlign: "center",
  },

  button: {
    position: "absolute",
    right: 0,
    top: 0,
    padding: 15,
    zIndex: 3,
  },
});
