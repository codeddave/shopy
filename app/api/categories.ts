import { UNAUTHENTICATED_ROUTES } from "./apiRoutes";
import client from "./config";

const getCategories = () => client.get(UNAUTHENTICATED_ROUTES.ALL_CATEGORIES);

export const categoryApi = {
  getCategories,
};
