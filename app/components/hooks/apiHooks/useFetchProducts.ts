import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { getProducts, selectProducts } from "../../../redux";
import { AppDispatch } from "../../../redux/store";

export const useFetchProducts = (): {
  products: any;
  categories: any;
  productCategories: any;
} => {
  const [filteredProducts, setFilteredProducts] = useState<{}[]>([]);
  const [categories, setCategories] = useState<{}[]>([]);
  const [productCategories, setProductCategories] = useState<{}[]>([]);

  const [isActive, setIsActive] = useState<number>(-1);
  const [initialState, setInitialState] = useState<{}[]>([]);

  const products = useSelector(selectProducts);
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
      console.log(
        categories.length,
        "djblajdvjlavjlsdvjlvjlConverting circular structure to JSON\n    --> starting at object with constructor 'Topology'\n"
      );
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
  };
};
