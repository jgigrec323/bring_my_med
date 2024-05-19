import { View, Text, StyleSheet } from "react-native";
import React from "react";
import HeaderBar from "../../components/HeaderBar";
import LikedEl from "../../components/LikedEl";

const Liked = () => {
  return (
    <View>
      <HeaderBar title={"Liked"}></HeaderBar>
      <View style={styles.elements}>
        <LikedEl></LikedEl>
        <LikedEl></LikedEl>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  elements: {
    marginTop: 20,
    marginHorizontal: 20,
    gap: 25,
  },
});

export default Liked;
