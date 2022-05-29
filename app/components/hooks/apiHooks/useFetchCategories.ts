import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SliceStatus } from "../../../interfaces";
import {
  selectCategories,
  selectCategoriesLoading,
} from "../../../redux/categories";
import { getCategories } from "../../../redux/categories/categorySlice";
import { AppDispatch } from "../../../redux/store";

export const useFetchCategories = (): {
  categories: any[];
  isCategoriesLoading: SliceStatus;
} => {
  const categories = useSelector(selectCategories);
  const isCategoriesLoading = useSelector(selectCategoriesLoading);

  const dispatch: AppDispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      dispatch(getCategories());

      return () => {};
    }, [])
  );
  return {
    categories,
    isCategoriesLoading,
  };
};
