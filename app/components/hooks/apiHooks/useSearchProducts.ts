import { useDispatch, useSelector } from "react-redux";
import {
  searchProducts,
  selectSearchedProducts,
  selectSearchedProductsLoading,
} from "../../../redux";
import { AppDispatch } from "../../../redux/store";
import { debounce } from "lodash";
import { useCallback, useState } from "react";

export const useSearchProducts = () => {
  const [showSearchProducts, setShowSearchProducts] = useState(false);
  const dispatch: AppDispatch = useDispatch();
  const searchedProducts = useSelector(selectSearchedProducts);
  const isLoadingSearchedProducts = useSelector(selectSearchedProductsLoading);

  const handleSearchProducts = useCallback(
    debounce((searchTerm: string) => {
      if (searchTerm === "") {
        setShowSearchProducts(false);
      } else {
        setShowSearchProducts(true);
      }
      dispatch(searchProducts(searchTerm));
    }, 1000),
    []
  );
  return {
    handleSearchProducts,
    showSearchProducts,
    searchedProducts,
    isLoadingSearchedProducts,
  };
};
