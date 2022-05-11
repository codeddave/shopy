import React from "react";
import { Box, Text } from "native-base";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/cart";

const CartIcon = () => {
  const cartItems = useSelector(selectCartItems);
  return (
    <>
      {cartItems.length ? (
        <Box
          position="absolute"
          top={-4}
          right={-6}
          bgColor="red.500"
          rounded="full"
          w="5"
          h="5"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize={12} color="white">
            {cartItems.length}{" "}
          </Text>
        </Box>
      ) : null}
    </>
  );
};

export default CartIcon;
