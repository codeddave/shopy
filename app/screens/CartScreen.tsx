import { Box, VStack, Image, Text, Button } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationScreenProp } from "react-navigation";
import { useCart } from "../components";

type Props = {
  navigation: NavigationScreenProp<any, any>;
};
const CartScreen = ({ navigation }: Props) => {
  const { cartItems, cartTotal, clearCart } = useCart();

  return (
    <Box bgColor="gray.200" height="full" paddingTop={1}>
      {cartItems.length ? (
        <>
          <Box display="flex" pr="3" py={1} alignItems="flex-end">
            <TouchableOpacity onPress={clearCart}>
              <Text> CLEAR</Text>
            </TouchableOpacity>
          </Box>

          {cartItems.map((cartItem) => (
            <Box
              padding={3}
              marginX={3}
              marginY={0.5}
              bgColor="white"
              display="flex"
              flexDirection="row"
              borderBottomWidth={0.17}
              borderBottomColor="gray.400"
            >
              <Box width={100} height={100}>
                <Image
                  width={100}
                  height={100}
                  resizeMode="contain"
                  source={{ uri: cartItem.image }}
                />
              </Box>

              <VStack paddingLeft={7}>
                <Text>{cartItem.name}</Text>
                <Text paddingTop={2}>${cartItem.price}</Text>
              </VStack>
            </Box>
          ))}
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="flex-end"
            marginTop={4}
            paddingRight={3}
          >
            <Text fontWeight="bold"> Total : ${cartTotal}</Text>
          </Box>
          <Button
            onPress={() => navigation.navigate("Checkout")}
            colorScheme="green"
            marginX={2}
            marginTop={5}
          >
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
