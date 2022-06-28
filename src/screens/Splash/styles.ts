import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: theme.colors.text,
    fontSize: 20,
    fontFamily: theme.fonts.regular,
    paddingHorizontal: 15,
    textAlign: "center",
  },

  btncontainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    marginRight: 20,
    marginBottom: 50,
  },

  pular: {
    color: theme.colors.text,
  },

  pagecontainer: {
    position: "absolute",
    bottom: 0,
    marginBottom: 60,
    flexDirection: "row",
  },

  currentpage: {
    width: 30,
    height: 10,
    backgroundColor: theme.colors.green,
    borderRadius: 10,
    marginHorizontal: 5,
  },

  dot: {
    width: 10,
    height: 10,
    backgroundColor: theme.colors.red,
    borderRadius: 10,
    marginHorizontal: 5,
  },
});
