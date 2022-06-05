import React, { FC } from "react";

//import ErrorMessage from "../components/ErrorMessage";
import { useFormikContext } from "formik";
import CustomTextInput from "./CustomTextInput";
import { Text } from "native-base";

type Props = {
  name: string;
  width?: string;
  otherProps?: any;
};
const AppFormField: FC<Props> = ({ name, width, ...otherProps }) => {
  const { setFieldTouched, setFieldValue, values, errors, touched } =
    useFormikContext();
  return (
    <>
      <CustomTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text: any) => {
          setFieldValue(name, text);
        }}
        value={(values as any)[name]}
        {...otherProps}
        width={width}
      />
      {touched[name] && errors[name] ? (
        <Text color="red.500"> {errors[name]} </Text>
      ) : null}
    </>
  );
};

export default AppFormField;
