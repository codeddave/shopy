import { AUTH_ROUTES } from "./apiRoutes";
import { create } from "apisauce";
/* const apiClient = create({
  baseURL: "https://wander-lust-mern.herokuapp.com",
});
 */
const apiClient = create({
  baseURL: "https://let-itgo.herokuapp.com",
});
export const logIn = async (loginData: { email: string; password: string }) => {
  return apiClient.post(AUTH_ROUTES.LOGIN, loginData);
};

export const register = async (registerData: {
  email: string;
  password: string;
  fullName: string;
}) => {
  return apiClient.post(AUTH_ROUTES.REGISTER, registerData);
};

export const authApi = {
  logIn,
  register,
};
/* export const forgotPassword = async (email) => {
  return apiClient.post("/user/forgot-password", { email });
}; */
