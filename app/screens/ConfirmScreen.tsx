import { View } from "react-native";
import React from "react";
import { Text } from "native-base";
import { StackScreenProps } from "@react-navigation/stack";

type RootStackParamList = {
  Shipping: undefined;
  Payment: { order: any };
  Confirm: { order: any };
};

type ScreenProps = StackScreenProps<RootStackParamList, "Confirm">;

const Confirm = ({}: ScreenProps) => {
  return (
    <View>
      <Text mt="5" mb="2" textAlign="center" fontSize="md" fontWeight="bold">
        Confirm Order
      </Text>
      <Text>Confirm</Text>
    </View>
  );
};

export default Confirm;
