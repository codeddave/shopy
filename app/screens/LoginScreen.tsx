import React from "react";
import { CustomForm, FormField, SubmitButton } from "../components";
import { Box, Text } from "native-base";
import { StackScreenProps } from "@react-navigation/stack";

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};

type ScreenProps = StackScreenProps<RootStackParamList, "Login">;

const LoginScreen = ({ navigation }: ScreenProps) => {
  return (
    <Box pt="24" width="94%" marginX="auto">
      <CustomForm
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={() => console.log("hello")}
      >
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
        <Text onPress={() => navigation.navigate("Register")} pt="2">
          Don't have an account?
        </Text>
        {/*   <Text onPress={() => navigation.navigate("Register")} pt="2">
          Forgot Password?
        </Text> */}
        <SubmitButton title="Log In" />
      </CustomForm>
    </Box>
  );
};

export default LoginScreen;
