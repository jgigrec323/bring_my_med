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
    height: 100,
    backgroundColor: COLORS.tertiary,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
    gap: 10,
    padding: 10,
    borderRadius: 15,
  },
  itemBtn: {
    backgroundColor: COLORS.gray,
    borderRadius: 150,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  text: {
    color: "gray",
    fontWeight: "bold",
  },
});
