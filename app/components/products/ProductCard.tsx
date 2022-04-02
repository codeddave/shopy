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
const ProductCard = ({ item }: Props) => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={{
          uri: item.image
            ? item.image
            : `https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png`,
        }}
      />
      <Text style={styles.title}>
        {item.name.length > 15 ? item.name.slice(0, 12) + "..." : item.name}
      </Text>
      <Text style={styles.price}>{item.price}</Text>

      {item.countInStock > 0 ? (
        <Button title="Add to Cart" onPress={() => console.log("hello")} />
      ) : (
        <Text> Out of Stock</Text>
      )}
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
    alignItems: "center",
    elevation: 8,
    borderColor: "grey",
    borderWidth: 0.2,
  },
  image: {
    width: width / 2 - 20 - 10,
    height: width / 2 - 20 - 70,
    backgroundColor: "transparent",
    top: -35,
  },
  card: {
    marginBottom: 10,
    height: width / 2 - 20 - 90,
    backgroundColor: "transparent",
    width: width / 2 - 20 - 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  price: {
    fontSize: 20,
    color: "orange",
    marginTop: 10,
  },
});

export default ProductCard;
