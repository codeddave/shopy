import React, { useState } from "react";
import type { StackScreenProps } from "@react-navigation/stack";
import { Box, Button, HStack, Select, Text } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

type RootStackParamList = {
  Shipping: undefined;
  Payment: { order: any };
  Confirm: { order: any };
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
//const Test = () => <Text pr="6">f</Text>;
const Payment = ({ route, navigation }: ScreenProps) => {
  const order = route.params?.order;
  const [selected, setSelected] = useState<number>();
  const [card, setCard] = useState();

  return (
    <Box width="98%" marginX="auto">
      <Text mt="6" mb="2" textAlign="center" fontSize="md" fontWeight="bold">
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
      {selected === 3 ? (
        <Select
          bgColor="white"
          borderRadius={30}
          placeholder="Select card type"
          placeholderTextColor="#adadaf"
          height="10"
          fontSize="sm"
          width="96%"
          pl="3"
          //dropdownIcon={<Test />}
          alignItems="center"
          mt={3}
        >
          {paymentCardOptions.map((paymentCardOption) => (
            <Select.Item
              key={paymentCardOption.value}
              label={paymentCardOption.name}
              value={String(paymentCardOption.value)}
            />
          ))}
        </Select>
      ) : null}
      <Box mx="2">
        <Button
          onPress={() => navigation.navigate("Confirm", { order })}
          //onPress={handleSubmit}
          colorScheme="green"
          marginTop={20}
          /* {...otherProps} */
          w="full"
        >
          Confirm
        </Button>
      </Box>
    </Box>
  );
};

export default Payment;
