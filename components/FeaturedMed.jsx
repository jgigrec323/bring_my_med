import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import FeaturedMedItem from "./FeaturedMedItem"; // Assuming FeaturedMedItem displays a single medication item

const FeaturedMed = () => {
  const [featuredMeds, setFeaturedMeds] = useState([
    {
      id: 1,
      title: "Rapid Covid-19 Antigen Self-Test 1",
      image: require("../assets/pills.png"),
      price: 100,
    },
    {
      id: 2,
      title: "Rapid Covid-19 Antigen Self-Test 2",
      image: require("../assets/pills.png"),
      price: 100,
    },
    {
      id: 3,
      title: "Rapid Covid-19 Antigen Self-Test 3",
      image: require("../assets/pills.png"),
      price: 100,
    },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={featuredMeds}
        renderItem={({ item }) => <FeaturedMedItem key={item.id} data={item} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    height: 160,
  },
  flatList: {
    flexDirection: "row",
    width: "100%",
  },
});

export default FeaturedMed;
