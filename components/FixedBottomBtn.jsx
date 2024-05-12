import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { COLORS } from "../constants";

const FixedBottomBtn = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.btnContainer}>
        <Text>Button Text</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0, // Ensure it spans the entire width
    right: 0,

    width: "100%",
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100, // Make sure it's above other content
  },
  btnContainer: {
    backgroundColor: COLORS.secondary,
    width: 270,
    height: 55,
    borderRadius: 150,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FixedBottomBtn;
