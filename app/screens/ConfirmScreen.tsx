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
      <Text mt="5" mb="2" textAlign="center" fontSize="md" fontWeight="bold">
        Confirm Order
      </Text>
      <Box textAlign="center" display="flex" alignItems="center">
        <Text>Address: {order?.shippingAddressOne}</Text>
      </Box>
    </View>
  );
};

export default Confirm;
