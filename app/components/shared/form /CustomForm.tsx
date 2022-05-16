import React, { FC } from "react";
import { Formik } from "formik";

type Props = {
  initialValues: any;
  validationSchema: any;
  onSubmit: () => void;
};
const CustomForm: FC<Props> = ({
  initialValues,
  validationSchema,
  onSubmit,
  children,
}) => {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default CustomForm;
