import { UNAUTHENTICATED_ROUTES } from "./apiRoutes";
import client from "./config";

const getProducts = () => {
  return client.get(UNAUTHENTICATED_ROUTES.ALL_PRODUCTS);
};

export const productApi = {
  getProducts,
};
