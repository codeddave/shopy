import { View, Text } from "react-native";
import React from "react";

type PaymentOptionsType = {
  name: string;
  value: number;
};
const paymentMethods: PaymentOptionsType[] = [
  { name: "Cash on Delivery", value: 1 },
  { name: "Cash on Delivery", value: 1 },
];

const paymentCardOptions: PaymentOptionsType[] = [
  { name: "Wallet", value: 1 },
  { name: "Visa", value: 2 },
  { name: "MasterCard", value: 3 },
  { name: "Other", value: 4 },
];
const Payment = () => {
  return (
    <View>
      <Text>Payment</Text>
    </View>
  );
};

export default Payment;
