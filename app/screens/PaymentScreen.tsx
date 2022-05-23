import { View } from "react-native";
import React, { useState } from "react";
import type { StackScreenProps } from "@react-navigation/stack";
import { Box, HStack, Radio, Text } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

type RootStackParamList = {
  Shipping: undefined;
  Payment: { order: any };
  Confirm: any /* { sort: 'latest' | 'top' } | undefined; */;
};

type ScreenProps = StackScreenProps<RootStackParamList, "Payment">;
type PaymentOptionsType = {
  name: string;
  value: number;
};
const paymentMethods: PaymentOptionsType[] = [
  { name: "Cash on Delivery", value: 1 },
  { name: "Bank Transfer", value: 2 },
  { name: "Card Payment", value: 3 },
];

const paymentCardOptions: PaymentOptionsType[] = [
  { name: "Wallet", value: 1 },
  { name: "Visa", value: 2 },
  { name: "MasterCard", value: 3 },
  { name: "Other", value: 4 },
];
const Payment = ({ route }: ScreenProps) => {
  const order = route.params?.order;
  const [selected, setSelected] = useState<number>();
  const [card, setCard] = useState();

  return (
    <Box width="98%" marginX="auto">
      <Text mt="5" mb="2" textAlign="center" fontSize="md" fontWeight="bold">
        {" "}
        Choose your payment method
      </Text>
      {paymentMethods.map((paymentMethod) => (
        <TouchableOpacity onPress={() => setSelected(paymentMethod.value)}>
          <Box borderBottomWidth={1} borderColor="coolGray.200" py={2}>
            <HStack
              justifyContent="space-between"
              alignItems="center" /* space={3} */
            >
              <Text> {paymentMethod.name}</Text>
              {selected === paymentMethod.value ? (
                <Box pr="3">
                  <MaterialCommunityIcons name="check" />
                </Box>
              ) : null}
            </HStack>
          </Box>
        </TouchableOpacity>
      ))}
    </Box>
  );
};

export default Payment;
