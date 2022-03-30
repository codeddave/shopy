import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Image,
  Button,
} from "react-native";

const { width } = Dimensions.get("window");
type Props = {
  item: any;
};
const ProductCard = (props: Props) => {
  return (
    <View style={styles.container}>
      <Image />

      <View />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: width / 2 - 20,
    height: width / 1.7,
    padding: 10,
    borderRadius: 10,
    marginTop: 55,
    marginBottom: 5,
    marginLeft: 10,
    backgroundColor: "white",
  },
});

export default ProductCard;
