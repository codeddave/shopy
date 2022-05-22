import { View, Text } from "react-native";
import React from "react";

type PaymentMethodsType = {
  name: string;
  value: number;
};
const paymentMethods: PaymentMethodsType[] = [
  { name: "Cash on Delivery", value: 1 },
  { name: "Cash on mDelivery", value: 1 },
];
const Payment = () => {
  return (
    <View>
      <Text>Payment</Text>
    </View>
  );
};

export default Payment;
