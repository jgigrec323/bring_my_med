import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../constants";

const ProductCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image
          source={require("../assets/pills.png")}
          style={styles.img}
        ></Image>
      </View>
      <View style={{ marginLeft: 15 }}>
        <Pressable style={styles.tag}>
          <Text>Vitamins</Text>
        </Pressable>
        <Text style={styles.name}>Solgar Gentle Iron</Text>
        <View style={styles.contains}>
          <Text style={styles.containText}>20mg</Text>
          <View style={styles.roundedV}></View>
          <Text style={styles.containText}>90 capsule</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>250 TRY</Text>
          <Text style={{ marginLeft: 2, color: "gray", fontSize: 15 }}>
            /bottle
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.gray,
    borderRadius: 18,
    overflow: "hidden",
    paddingBottom: 20,
  },
  top: {
    height: 150,
    backgroundColor: COLORS.primary,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  tag: {
    backgroundColor: COLORS.primary,
    marginTop: 10,
    width: 80,
    padding: 2,
    alignItems: "center",
    borderRadius: 150,
    fontWeight: "bold",
    fontSize: 8,
    marginBottom: 8,
  },
  name: {
    fontWeight: "bold",
    fontSize: 17,
  },
  contains: {
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
  },
  containText: {
    color: "gray",
  },
  roundedV: {
    height: 10,
    width: 10,
    backgroundColor: "gray",
    borderRadius: 150,
  },
  priceContainer: {
    flexDirection: "row",
    marginTop: 12,
  },
  price: {
    fontWeight: "bold",
    fontSize: 15,
  },
});
