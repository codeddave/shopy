import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://shopy-api.herokuapp.com",
});

export default apiClient;
