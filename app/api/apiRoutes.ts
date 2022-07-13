export const UNAUTHENTICATED_ROUTES = {
  ALL_PRODUCTS: "/products",
  ALL_CATEGORIES: "/categories",
  SEARCH_PRODUCTS: (searchTerm: string) =>
    `products/search/?searchTerm=${encodeURIComponent(searchTerm)}`,
};
export const AUTH_ROUTES = {
  HOME: "/",
  FORGOT_PASSWORD: "/auth/forgot-password",
  LOGIN: "/users/login",
  REGISTER: "/users/register",
  GET_USER: (id: string) => `/users/${id}`,
};

export const AUTHENTICATED_ROUTES = {};
