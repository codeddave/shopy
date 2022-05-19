import React from "react";
import { CustomForm, FormField, SubmitButton } from "../components";
import { Box, Select, Text } from "native-base";
import countriesData from "../../assets/data/countries.json";
import { NavigationScreenProp } from "react-navigation";

type Props = {
  navigation: NavigationScreenProp<any, any>;
};
const CheckoutScreen = ({ navigation }: Props) => {
  const initialValues = {
    phone: "",
    shippingAddressOne: "",
    shippingAddressTwo: "",
    city: "",
    zipCode: "",
    country: "",
  };
  const handleCheckout = () => {
    navigation.navigate("Payment");
  };
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
        onSubmit={(values) => console.log(values)}
        initialValues={initialValues}
        //validationSchema={{}}
      >
        <FormField
          name="phone"
          {...{
            placeholder: "Phone",
            keyboardType: "numeric",
          }}
        />
        <FormField
          name="shippingAddressOne"
          {...{ placeholder: "Shipping Address 1" }}
        />
        <FormField
          name="shippingAddressTwo"
          {...{ placeholder: "Shipping Address 2" }}
        />
        <FormField name="city" {...{ placeholder: "City" }} />
        <FormField
          name="zipCode"
          {...{
            placeholder: "Zip Code",
            keyboardType: "numeric",
          }}
        />
        <Select
          bgColor="white"
          borderRadius={30}
          placeholder="Select your country"
          placeholderTextColor="#adadaf"
          height="10"
          fontSize="sm"
          width="full"
          mt={1}
        >
          {countriesData.map((country) => (
            <Select.Item
              key={country.code}
              label={country.name}
              value={country.name}
            />
          ))}
        </Select>
        <SubmitButton title="Checkout" />
      </CustomForm>
    </Box>
  );
};

export default CheckoutScreen;
