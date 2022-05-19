import React, { FC } from "react";
import { Formik, FormikValues } from "formik";

type Props = {
  initialValues?: any;
  validationSchema?: any;
  onSubmit: (values: FormikValues) => void;
};
const CustomForm: FC<Props> = ({
  initialValues,
  //validationSchema,
  onSubmit,
  children,
}) => {
  return (
    <Formik
      //validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default CustomForm;
