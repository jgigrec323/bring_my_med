import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { COLORS } from "../constants";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <EvilIcons name="search" color={"gray"} size={28} style={styles.icon} />
      <TextInput placeholder="Enter drug name to search" style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: COLORS.gray,
    borderRadius: 70,
    borderWidth: 2,
    paddingHorizontal: 10,
    height: 50,
    marginTop: 15,
    marginRight: 25,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 400,
    padding: 8,
  },
});

export default SearchBar;
