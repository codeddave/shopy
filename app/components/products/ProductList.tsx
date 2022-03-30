import React from "react";
import { TouchableOpacity, StyleSheet, View, Dimensions } from "react-native";
import ProductCard from "./ProductCard";

type Props = {
  item: any;
};
const { width } = Dimensions.get("window");
const ProductList = ({ item }: Props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={{ width: width / 2, backgroundColor: "gainsboro" }}>
        <ProductCard item={item} />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "50%",
  },
});

export default ProductList;
