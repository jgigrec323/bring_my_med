import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import { COLORS } from "../constants";

const CartElement = () => {
  const [counter, setCounter] = useState(1);
  const addQty = () => {
    setCounter(counter + 1);
  };
  const removeQty = () => {
    if (counter > 1) setCounter(counter - 1);
  };
  return (
    <View style={styles.container}>
      <View style={styles.select}></View>
      <View style={styles.right}>
        <View style={styles.img}></View>
        <View style={styles.infos}>
          <Text style={styles.name}>Solgar Gentle Iron</Text>
          <View style={styles.contains}>
            <Text style={styles.containText}>20mg</Text>
            <View style={styles.roundedV}></View>
            <Text style={styles.containText}>90 capsule</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{250 * counter} TRY</Text>
            <View
              style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
            >
              <Pressable onPress={removeQty}>
                <FontAwesome6 name="circle-minus" size={20} color="gold" />
              </Pressable>
              <Text style={{ fontSize: 15 }}>{counter}</Text>
              <Pressable onPress={addQty}>
                <FontAwesome6 name="circle-plus" size={20} color="gold" />
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
  },
  right: {
    position: "relative",
    backgroundColor: COLORS.gray,
    flex: 1,
    borderRadius: 20,
    flexDirection: "row",
    overflow: "hidden",
    gap: 15,
  },
  select: {
    width: 25,
    height: 25,
    backgroundColor: "gold",
    borderRadius: 7,
  },
  img: {
    borderRadius: 20,
    width: "40%",
    backgroundColor: COLORS.primary,
  },
  infos: {
    paddingVertical: 17,
  },
  name: {
    fontWeight: "bold",
    fontSize: 17,
  },
  contains: {
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
    marginTop: 5,
    marginBottom: 17,
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
    alignItems: "center",
    marginTop: 12,
    gap: 15,
  },
  price: {
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default CartElement;
