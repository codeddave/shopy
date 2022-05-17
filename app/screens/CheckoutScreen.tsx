import { View, Text } from "react-native";
import React from "react";
import { CustomForm } from "../components";

const CheckoutScreen = () => {
  return (
    <View>
      <CustomForm
        onSubmit={() => console.log("hello")}
        initialValues={{}}
        validationSchema={{}}
      />
    </View>
  );
};

export default CheckoutScreen;
