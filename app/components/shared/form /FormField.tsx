import React, { FC } from "react";
import AppTextInput from "../components/AppTextInput";
import ErrorMessage from "../components/ErrorMessage";
import { FormikValues, useFormikContext } from "formik";

type Props = {
  name: string;
  width: string;
};
const AppFormField: FC<Props> = ({ name, width, ...otherProps }) => {
  const { setFieldTouched, setFieldValue, values, errors, touched } =
    useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text: any) => setFieldValue(name, text)}
        value={(values as any)[name]}
        {...otherProps}
        width={width}
      />
      {/*       {touched[name] ? <ErrorMessage error={errors[name]} /> : null} */}
    </>
  );
};

export default AppFormField;
