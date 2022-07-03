import { UNAUTHENTICATED_ROUTES } from "./apiRoutes";
import client from "./config";

const getProducts = async () => {
  return client.get(UNAUTHENTICATED_ROUTES.ALL_PRODUCTS);
};

const searchProducts = async (searchTerm: string) => {
  client.get(UNAUTHENTICATED_ROUTES.SEARCH_PRODUCTS(searchTerm));
};
export const productApi = {
  getProducts,
  searchProducts,
};
