import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { COLORS } from "../constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const FixedBottomBtn = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.btnContainer}>
        <View style={styles.roundedcircle}></View>
        <MaterialCommunityIcons name="pill" size={24} color="white" />
        <FontAwesome5 name="receipt" size={24} color="white" />
        <AntDesign name="hearto" size={24} color="white" />
        <AntDesign name="setting" size={24} color="white" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 30,
    left: 0, // Ensure it spans the entire width
    right: 0,

    width: "100%",

    justifyContent: "center",
    alignItems: "center",
    zIndex: 100, // Make sure it's above other content
  },
  btnContainer: {
    backgroundColor: COLORS.secondary,
    width: 300,
    height: 65,
    borderRadius: 150,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 40,
  },
  roundedcircle: {
    height: 50,
    width: 50,
    position: "absolute",
    backgroundColor: COLORS.tertiary,
    borderRadius: 150,
    left: 31,
  },
});

export default FixedBottomBtn;
