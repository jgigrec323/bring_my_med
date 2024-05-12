import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import ProductCard from "./ProductCard";

const MainProducts = () => {
  const [products, setProducts] = useState([
    // Add your product data here

    { id: 1, title: "Product 1", image: "image1.jpg" },
    { id: 2, title: "Product 2", image: "image2.jpg" },
    { id: 2, title: "Product 2", image: "image2.jpg" },
    { id: 2, title: "Product 2", image: "image2.jpg" },
    // ... more products
  ]);

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.productContainer}>
        <ProductCard key={item.id} product={item} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 500,
    marginRight: 25,
  },
  productContainer: {
    flex: 0.5,
    margin: 5,
  },
  contentContainer: {
    paddingBottom: 20,
  },
});

export default MainProducts;
