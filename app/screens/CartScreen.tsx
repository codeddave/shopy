import { Box, VStack, Image, Text, Button } from "native-base";
import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../redux/cart";

const CartScreen = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <Box bgColor="gray.200" height="full" paddingTop={1}>
      {cartItems.length ? (
        <>
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
              <Box width={100} height={100}>
                <Image resizeMode="contain" source={{ uri: cartItem.image }} />
              </Box>

              <VStack paddingLeft={7}>
                <Text>{cartItem.name}</Text>
                <Text paddingTop={2}>{cartItem.price}</Text>
              </VStack>
            </Box>
          ))}
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="flex-end"
            marginTop={4}
            paddingRight={2}
          >
            <Text> Total : ${cartTotal}</Text>
          </Box>
          <Button colorScheme="green" marginX={2} marginTop={5}>
            Checkout
          </Button>
        </>
      ) : (
        <Box height="full" justifyContent="center" alignItems="center">
          <Text> You have no items in your cart</Text>
        </Box>
      )}
    </Box>
  );
};

export default CartScreen;
