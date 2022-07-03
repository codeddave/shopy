import { useDispatch } from "react-redux";
import { searchProducts } from "../../../redux";
import { AppDispatch } from "../../../redux/store";
import { debounce } from "lodash";
import { useCallback } from "react";

export const useSearchProducts = () => {
  const dispatch: AppDispatch = useDispatch();

  const handleSearchProducts = useCallback(
    debounce((searchTerm: string) => {
      dispatch(searchProducts(searchTerm));
    }, 1000),
    []
  );
  return {
    handleSearchProducts,
  };
};
