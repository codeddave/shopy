import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { selectCartItems } from "../redux/cart";

const CartScreen = () => {
  const cartItems = useSelector(selectCartItems);
  return (
    <View>
      {cartItems.map((cartItem) => (
        <Text> {cartItem.name}</Text>
      ))}
    </View>
  );
};

export default CartScreen;
