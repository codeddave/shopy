import React from "react";
import { CustomForm, FormField, SubmitButton } from "../components";
import { Box, Text } from "native-base";

const LoginScreen = () => {
  return (
    <Box pt="20" width="95%" marginX="auto">
      <CustomForm initialValues={{}} onSubmit={() => console.log("hello")}>
        <Text textAlign="center" marginBottom={2} fontSize="3xl">
          Log In
        </Text>
        <FormField
          name="email"
          {...{
            placeholder: "Email",
            keyboardType: "email-address",
            autoCapitalize: "none",
            icon: "email",
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
            icon: "lock",
            textContentType: "password",
          }}
        />
        <Text pt="2">Forgot Password?</Text>

        <SubmitButton title="Log In" />
      </CustomForm>
    </Box>
  );
};

export default LoginScreen;
