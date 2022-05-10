import { Box, VStack, Image, Text } from "native-base";
import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { useSelector } from "react-redux";
import { selectCartItems } from "../redux/cart";

const CartScreen = () => {
  const cartItems = useSelector(selectCartItems);
  return (
    <Box bgColor="gray.200" height="full" paddingTop={1}>
      {cartItems.map((cartItem) => (
        <Box
          padding={3}
          bgColor="white"
          display="flex"
          flexDirection="row"
          borderBottomWidth={0.17}
          borderBottomColor="gray.400"
        >
          <Image
            resizeMode="contain"
            width={100}
            height={100}
            source={{ uri: cartItem.image }}
          />

          <VStack paddingLeft={7}>
            <Text>{cartItem.name}</Text>
            <Text>{cartItem.price}</Text>
          </VStack>
        </Box>
      ))}
    </Box>
  );
};

export default CartScreen;
