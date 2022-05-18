import { View } from "react-native";
import React from "react";
import { CustomForm, FormField } from "../components";
import { Box, Select, Text } from "native-base";
import countriesData from "../../assets/data/countries.json";

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
          {...{
            placeholder: "Phone",
            keyboardType: "numeric",
            /* icon: "email" */
          }}
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
          {...{
            placeholder: "Zip Code",
            keyboardType: "numeric" /* icon: "email" */,
          }}
        />
        <Select placeholder="Select your country"></Select>
      </CustomForm>
    </Box>
  );
};

export default CheckoutScreen;
