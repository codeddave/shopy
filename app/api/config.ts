import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://localhost:5500",
});

export default apiClient;
