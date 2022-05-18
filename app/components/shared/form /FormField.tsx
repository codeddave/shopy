import React, { FC } from "react";

//import ErrorMessage from "../components/ErrorMessage";
import { useFormikContext } from "formik";
import CustomTextInput from "./CustomTextInput";

type Props = {
  name: string;
  width?: string;
  otherProps?: any;
};
const AppFormField: FC<Props> = ({ name, width, ...otherProps }) => {
  return (
    <>
      <CustomTextInput
        //onBlur={() => setFieldTouched(name)}
        // onChangeText={(text: any) => setFieldValue(name, text)}
        // value={(values as any)[name]}
        {...otherProps}
        width={width}
      />
      {/*{touched[name] ? <ErrorMessage error={errors[name]} /> : null} */}
    </>
  );
};

export default AppFormField;
