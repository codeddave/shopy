import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import ProductCard from "./ProductCard";
import { NavigationScreenProp } from "react-navigation";

type Props = {
  item: any;
  navigation: NavigationScreenProp<any, any>;
};
const ProductList = ({ item, navigation }: Props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Product Detail", { item })}
    >
      <View style={{ backgroundColor: "gainsboro" }}>
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
