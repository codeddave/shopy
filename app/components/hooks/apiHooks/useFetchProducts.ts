import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import {
  getProducts,
  selectProducts,
  selectProductsLoading,
} from "../../../redux";
import { AppDispatch } from "../../../redux/store";
import { SliceStatus } from "../../../interfaces";

export const useFetchProducts = (): {
  products: any;
  categories: any;
  productCategories: any;
  isProductsLoading: SliceStatus;
} => {
  const [filteredProducts, setFilteredProducts] = useState<{}[]>([]);
  const [categories, setCategories] = useState<{}[]>([]);
  const [productCategories, setProductCategories] = useState<{}[]>([]);

  const [isActive, setIsActive] = useState<number>(-1);
  const [initialState, setInitialState] = useState<{}[]>([]);

  const products = useSelector(selectProducts);
  const isProductsLoading = useSelector(selectProductsLoading);
  const dispatch: AppDispatch = useDispatch();

  const setAllData = (data: any) => {
    setFilteredProducts(data);
    setInitialState(data);
    //setCategories(categoriesData);
    setProductCategories(data);
  };
  useFocusEffect(
    useCallback(() => {
      dispatch(getProducts(setAllData));

      return () => {
        setFilteredProducts([]);
        setInitialState([]);
        setCategories([]);
        setProductCategories([]);
      };
    }, [])
  );

  return {
    products,
    categories,
    productCategories,
    isProductsLoading,
  };
};
