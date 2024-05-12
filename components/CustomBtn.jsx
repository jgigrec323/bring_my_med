import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../constants";

const CustomBtn = ({ text, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.btnContainer}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default CustomBtn;

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: COLORS.secondary,
    width: 270,
    height: 55,
    borderRadius: 150,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: COLORS.gray,
    fontSize: 22,
    fontWeight: "bold",
  },
});
