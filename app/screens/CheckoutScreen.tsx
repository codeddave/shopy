import { View } from "react-native";
import React from "react";
import { CustomForm, FormField } from "../components";
import { Box, Text } from "native-base";

const CheckoutScreen = () => {
  return (
    <Box
      width="92%"
      marginX="auto"
      justifyContent="center"
      display="flex"
      alignItems="center"
    >
      <Text marginTop={5} marginBottom={2} fontSize="md">
        Shipping Address{" "}
      </Text>
      <CustomForm
      /*   onSubmit={() => console.log("hello")}saev
        initialValues={{}}
        validationSchema={{}} */
      >
        <FormField
          name="phone"
          {...{ placeholder: "Phone" /* icon: "email" */ }}
        />
        <FormField
          name="shippingAddressOne"
          {...{ placeholder: "Shipping Address 1" /* icon: "email" */ }}
        />
        <FormField
          name="shippingAddressTwo"
          {...{ placeholder: "Shipping Address 2" /* icon: "email" */ }}
        />
        <FormField
          name="city"
          {...{ placeholder: "City" /* icon: "email" */ }}
        />
        <FormField
          name="zipCode"
          {...{ placeholder: "Zip Code" /* icon: "email" */ }}
        />
      </CustomForm>
    </Box>
  );
};

export default CheckoutScreen;
