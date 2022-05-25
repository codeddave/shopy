import { View } from "react-native";
import React from "react";
import { Box, Text } from "native-base";
import { StackScreenProps } from "@react-navigation/stack";

type RootStackParamList = {
  Shipping: undefined;
  Payment: { order: any };
  Confirm: { order: any };
};

type ScreenProps = StackScreenProps<RootStackParamList, "Confirm">;

const Confirm = ({ route }: ScreenProps) => {
  const order = route.params?.order;
  return (
    <View>
      <Text mt="6" mb="2" textAlign="center" fontSize="md" fontWeight="bold">
        Confirm Order
      </Text>
      <Box
        textAlign="center"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Text>Address: {order?.shippingAddressOne}</Text>
        <Text mt="2">Address2: {order?.shippingAddressTwo}</Text>
        <Text mt="2">City: {order?.city}</Text>
        <Text mt="2">Zip Code: {order?.zipCode}</Text>
      </Box>
    </View>
  );
};

export default Confirm;
