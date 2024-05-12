import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import React, { useState } from "react";
import SymptomsItem from "./SymptomsItem";

const Symptoms = () => {
  const [featuredSymptoms, setfeaturedSymptoms] = useState([
    {
      id: 1,
      title: "Colds & Flu",
    },
    {
      id: 2,
      title: "Allergies",
    },
    {
      id: 3,
      title: "Diarrhea",
    },
    {
      id: 4,
      title: "Colds & Flu",
    },
    {
      id: 5,
      title: "Allergies",
    },
    {
      id: 6,
      title: "Diarrhea",
    },
  ]);
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom: 15 }}>
        How are you feeling ?
      </Text>
      <View style={styles.featuredSymptoms}>
        <FlatList
          style={styles.flatList}
          data={featuredSymptoms}
          renderItem={({ item }) => (
            <SymptomsItem key={item.id}>{item.title}</SymptomsItem>
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default Symptoms;

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    height: 150,
    width: "100%",
  },
  flatList: {
    height: 100,

    flex: 1,
    width: "100%",
    backgroundColor: "yellow",
  },
});
