import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import HeaderBar from "../../../components/HeaderBar";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../../constants";
import { FontAwesome6 } from "@expo/vector-icons";
import FixedBottomTextBtn from "../../../components/FixedBottomTextBtn";
const Product = () => {
  const [counter, setCounter] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  const links = [
    {
      id: 1,
      title: "Description",
    },
    {
      id: 2,
      title: "How to use",
    },
    {
      id: 3,
      title: "Warnings",
    },
    {
      id: 4,
      title: "Ingredients",
    },
  ];
  const addQty = () => {
    setCounter(counter + 1);
  };
  const removeQty = () => {
    if (counter > 1) setCounter(counter - 1);
  };
  return (
    <View>
      <HeaderBar title={"Details product"}></HeaderBar>
      <View
        style={{
          marginHorizontal: 25,
        }}
      >
        <View style={styles.imgContainer}>
          <AntDesign
            onPress={() => setIsLiked(!isLiked)}
            style={{ position: "absolute", right: 20, top: 20 }}
            name={isLiked ? "heart" : "hearto"}
            size={30}
            color={isLiked ? "red" : "white"}
          />
        </View>
        {/* price and qty */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{}}>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>250 TRY</Text>
              <Text style={{ marginLeft: 2, color: "gray", fontSize: 25 }}>
                /bottle
              </Text>
            </View>
            <Pressable style={styles.tag}>
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>Vitamins</Text>
            </Pressable>
          </View>
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <Pressable onPress={removeQty}>
              <FontAwesome6 name="circle-minus" size={30} color="gold" />
            </Pressable>
            <Text style={{ fontSize: 20 }}>{counter}</Text>
            <Pressable onPress={addQty}>
              <FontAwesome6 name="circle-plus" size={30} color="gold" />
            </Pressable>
          </View>
        </View>
        <Text style={styles.name}>Solgar Gentle Iron</Text>
        <View style={styles.contains}>
          <Text style={styles.containText}>20mg</Text>
          <View style={styles.roundedV}></View>
          <Text style={styles.containText}>90 capsule</Text>
        </View>
        <View style={styles.links}>
          {links.map((link) => (
            <Pressable key={link.id} style={styles.itemBtn}>
              <Text style={styles.text}>{link.title}</Text>
            </Pressable>
          ))}
        </View>
        <Text style={{ marginTop: 10, color: "gray" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
          asperiores, id cum veniam, magni accusamus harum, inventore voluptatem
          quidem ipsum quam modi at. Quas ullam natus vel. Quam, voluptatem
          veritatis. Iure odit suscipit consequuntur praesentium libero, commodi
          eaque nostrum quidem fugiat voluptates eius facilis rem eum maxime ab
          reiciendis! Quod rerum nulla officia a quaerat sed, quibusdam
          perferendis voluptatum iure. Harum nostrum nisi consequuntur cum
          distinctio reiciendis animi obcaecati molestiae impedit! Ex laboriosam
          soluta necessitatibus, aspernatur vel hic. Perspiciatis dicta minima
          earum impedit possimus asperiores rerum recusandae mollitia ipsam
          ipsa.
        </Text>
        <FixedBottomTextBtn>Add to cart</FixedBottomTextBtn>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    height: 300,
    width: "100%",
    backgroundColor: COLORS.primary,
    borderRadius: 35,
    marginTop: 20,
  },
  tag: {
    backgroundColor: COLORS.primary,
    marginTop: 10,
    width: 100,
    height: 30,
    padding: 2,
    alignItems: "center",
    borderRadius: 150,
    marginBottom: 8,
    justifyContent: "center",
  },
  priceContainer: {
    flexDirection: "row",
    marginTop: 12,
  },
  price: {
    fontWeight: "bold",
    fontSize: 25,
  },
  name: {
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 2,
  },
  contains: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    gap: 15,
  },
  containText: {
    color: "gray",
    fontSize: 15,
  },
  roundedV: {
    height: 10,
    width: 10,
    backgroundColor: "gray",
    borderRadius: 150,
  },
  links: {
    flexDirection: "row",
    marginTop: 15,
    gap: 10,
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
    fontSize: 12,
  },
});

export default Product;
