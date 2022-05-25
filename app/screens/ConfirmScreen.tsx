import { View } from "react-native";
import React from "react";
import { Avatar, Box, HStack, Text } from "native-base";
import { StackScreenProps } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import { selectCartItems } from "../redux/cart";
/* 
Create component for Text Heading, Custom button
useCartItems hook that return items in cart and other details about cart

*/
type RootStackParamList = {
  Shipping: undefined;
  Payment: { order: any };
  Confirm: { order: any };
};

type ScreenProps = StackScreenProps<RootStackParamList, "Confirm">;

const Confirm = ({ route }: ScreenProps) => {
  const cartItems = useSelector(selectCartItems);
  const order = route.params?.order;
  return (
    <View>
      <Text mt="6" mb="2" textAlign="center" fontSize="md" fontWeight="bold">
        Confirm Order
      </Text>
      <Text mb="2" textAlign="center" fontWeight="bold">
        Shipping to:
      </Text>

      <Box textAlign="center" display="flex" w="90%" mx="auto">
        <Text>Address: {order?.shippingAddressOne}</Text>
        <Text mt="2">Address2: {order?.shippingAddressTwo}</Text>
        <Text mt="2">City: {order?.city}</Text>
        <Text mt="2">Zip Code: {order?.zipCode}</Text>

        <Text mt="4" mb="3" textAlign="center" fontWeight="bold">
          Items:
        </Text>
        {/* Set minimum height and add scrollview */}
        {cartItems.map((cartItem) => (
          <HStack justifyContent="space-between" mb={"3"}>
            <HStack>
              <Avatar
                size="48px"
                rounded="full"
                source={{ uri: cartItem.image }}
              />
              <Text pl="3"> {cartItem.name}</Text>
            </HStack>
            <Box>
              <Text> ${cartItem.price}</Text>
            </Box>
          </HStack>
        ))}
      </Box>
    </View>
  );
};

export default Confirm;
