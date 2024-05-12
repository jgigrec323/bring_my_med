import { StyleSheet } from "react-native";
import { COLORS } from "../constants";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 70,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    paddingRight: 25,
  },
  left: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  profileContainer: {
    width: 50,
    height: 50,
    borderRadius: 300,
    overflow: "hidden",
  },
  profileImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  locationPart: {},
  locationIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
  right: {
    flexDirection: "row",
    gap: 10,
  },
  iconContainer: {
    backgroundColor: COLORS.tertiary,
    width: 45,
    height: 45,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 150,
  },
});
