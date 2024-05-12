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
  resendBtn: {
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
