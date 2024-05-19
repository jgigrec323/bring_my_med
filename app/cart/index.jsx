import { View, Text, StyleSheet } from "react-native";
import React from "react";
import HeaderBar from "../../components/HeaderBar";
import CartElement from "../../components/CartElement";

const Cart = () => {
  return (
    <View>
      <HeaderBar title={"My cart"}></HeaderBar>
      <View style={styles.elements}>
        <CartElement></CartElement>
        <CartElement></CartElement>
        <CartElement></CartElement>
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

export default Cart;
