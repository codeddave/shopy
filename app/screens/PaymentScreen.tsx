import { View, Text } from "react-native";
import React, { useState } from "react";
import type { StackScreenProps } from "@react-navigation/stack";

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
  const order = route.params.order;
  const [selected, setSelected] = useState();
  const [card, setCard] = useState();

  return (
    <View>
      <Text>Payment</Text>
    </View>
  );
};

export default Payment;
