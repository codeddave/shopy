import React from "react";
import { useFormikContext } from "formik";
import { Button } from "native-base";

type Props = {
  title: string;
  otherProps?: any;
};
const SubmitButton = ({ title, otherProps }: Props) => {
  const { handleSubmit } = useFormikContext();

  return (
    <Button
      onPress={handleSubmit}
      colorScheme="green"
      marginX={2}
      marginTop={5}
      {...otherProps}
    >
      {title}
    </Button>
  );
};

export default SubmitButton;
