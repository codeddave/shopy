import React from "react";
import { CustomForm, FormField, SubmitButton } from "../components";
import { Box, Text } from "native-base";
import { StackScreenProps } from "@react-navigation/stack";
import { SCREENS } from "../constants/routes/AppScreens";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { RegisterFormData, RegisterSchema } from "../definitions";
import { register } from "../redux";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};

type ScreenProps = StackScreenProps<RootStackParamList, "Register">;

const initilValues: RegisterFormData = {
  fullName: "",
  email: "",
  password: "",
};
const RegisterScreen = ({ navigation }: ScreenProps) => {
  const dispatch: AppDispatch = useDispatch();
  const handleSubmit = (values: any): void => {
    dispatch(register(values as RegisterFormData));
  };
  return (
    <KeyboardAwareScrollView enableOnAndroid>
      <Box pt="24" width="94%" marginX="auto">
        <CustomForm
          initialValues={initilValues}
          validationSchema={RegisterSchema}
          onSubmit={handleSubmit}
        >
          <Text textAlign="center" marginTop={4} mb="6" fontSize="3xl">
            Register
          </Text>
          <FormField
            name="fullName"
            {...{
              placeholder: "Full Name",
              autoCorrect: false,
              autoCapitalize: "none",
              icon: "account",
            }}
          />
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
          <Text
            onPress={() => navigation.navigate(SCREENS.LOGIN as any)}
            pt="2"
          >
            Already have an account? <Text fontWeight="bold">Login</Text>
          </Text>

          <SubmitButton title="Register" />
        </CustomForm>
      </Box>
    </KeyboardAwareScrollView>
  );
};

export default RegisterScreen;
