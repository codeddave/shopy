import React from "react";
import { TouchableOpacity, StyleSheet, View, Dimensions } from "react-native";

type Props = {
  item: any;
};
const { width } = Dimensions.get("window");
const ProductList = (props: Props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={{ width: width / 2, backgroundColor: "gainsboro" }}></View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "50%",
  },
});

export default ProductList;
