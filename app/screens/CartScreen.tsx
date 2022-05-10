import { Box, VStack, Image, Text, Button } from "native-base";
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
          marginX={2}
          marginY={0.5}
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
            <Text paddingTop={2}>{cartItem.price}</Text>
          </VStack>
        </Box>
      ))}
      <Button colorScheme="green" marginX={2} marginTop={5}>
        Checkout
      </Button>
    </Box>
  );
};

export default CartScreen;
