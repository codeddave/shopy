import { UNAUTHENTICATED_ROUTES } from "./apiRoutes";
import client from "./config";

const getProducts = () => {
  client.get(UNAUTHENTICATED_ROUTES.ALL_PRODUCTS);
};

export const products = {
  getProducts,
};
