import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../constants";

const SymptomsItem = ({ children }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.itemBtn}>
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default SymptomsItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
    padding: 10,
  },
  itemBtn: {
    borderWidth: 2,
    borderRadius: 150,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  text: {
    color: COLORS.secondary,
    fontWeight: "bold",
  },
});
