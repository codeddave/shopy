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
      <Text marginTop={4} fontSize="md">
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
      </CustomForm>
    </Box>
  );
};

export default CheckoutScreen;
