import * as Yup from "yup";

export const LoginSchema = Yup.object({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().label("Password"),
}).required();

export type LoginFormData = Yup.InferType<typeof LoginSchema>;
