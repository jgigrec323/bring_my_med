import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { COLORS } from "../constants";

const FeaturedMedItem = ({ data }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.itemImg} source={data.image}></Image>
      <View style={styles.right}>
        <Text style={styles.itemTitle}>{data.title}</Text>
        <View>
          <Text style={{ color: "white" }}>Available Now</Text>
          <Text style={{ color: "white" }}>only {data.price} TRY</Text>
        </View>
        <Pressable style={styles.itemBtn} onPress={() => {}}>
          <Text style={styles.text}>Shop Now</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default FeaturedMedItem;

const styles = StyleSheet.create({
  container: {
    height: 160,
    backgroundColor: COLORS.tertiary,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 25,
    justifyContent: "space-between",
    width: 270,
    padding: 10,
    borderRadius: 15,
  },
  right: {
    gap: 10,
    width: 160,
    alignItems: "flex-start",
  },
  itemImg: {
    width: 70,
    height: 70,
    objectFit: "contain",
  },
  itemTitle: {
    color: "white",
    fontSize: 18,
    numberOfLines: 2,
    textOverflow: "ellipsis",
    lineBreakMode: "auto",
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
