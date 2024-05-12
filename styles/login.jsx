import { StyleSheet } from "react-native";
import { COLORS } from "../constants";

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 50,
  },
  heading: {
    fontSize: 35,
    color: COLORS.tertiary,
  },
  label: {
    fontSize: 17,
    color: COLORS.tertiary,
    marginBottom: 60,
  },
  inputGroup: {
    marginBottom: 30,
  },
  inputView: {
    width: "100%",
    height: 48,
    borderColor: COLORS.tertiary,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 22,
    marginTop: 10,
  },
  checkbox: {
    marginRight: 10,
    fontSize: 12,
  },
});
