import { View, Text } from "react-native";
import React from "react";
import { CustomForm, FormField } from "../components";
import { Box } from "native-base";

const LoginScreen = () => {
  return (
    <Box>
      <CustomForm initialValues={{}} onSubmit={() => console.log("hello")}>
        <FormField
          name="email"
          {...{
            placeholder: "Email",
            keyboardType: "email-address",
            autoCapitalize: "none",
            autoCorrect: false,
            textContentType: "emailAddress",
          }}
        />

        <FormField
          name="password"
          {...{
            placeholder: "Password",
            secureTextEntry: true,
            autoCapitalize: "none",
            autoCorrect: false,
            textContentType: "password",
          }}
        />
      </CustomForm>
    </Box>
  );
};

export default LoginScreen;
