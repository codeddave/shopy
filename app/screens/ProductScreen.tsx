import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";

import { NavigationScreenProp } from "react-navigation";
import ProductList from "../components/products/ProductList";
import { ScrollView, Text } from "native-base";

import SearchedProductsScreen from "./SearchedProductsScreen";
import Banner from "../components/shared/Banner";
import {
  Categories,
  CustomActivityIndicator,
  SearchInput,
  useProducts,
} from "../components";
import { SliceStatus } from "../interfaces";
import {
  useFetchCategories,
  useFetchProducts,
} from "../components/hooks/apiHooks";

type Props = {
  navigation: NavigationScreenProp<any, any>;
};
const ProductScreen = ({ navigation }: Props) => {
  const [filteredProducts, setFilteredProducts] = useState<{}[]>([]);

  const [isActive, setIsActive] = useState<number>(-1);
  const [initialState, setInitialState] = useState<{}[]>([]);

  const { products, productCategories, isProductsLoading } = useFetchProducts();
  const { categories, isCategoriesLoading } = useFetchCategories();
  const { openList, closeList, focus } = useProducts();
  const searchProducts = (text: string) => {
    text === "" ? closeList() : openList();
    setFilteredProducts(
      products.filter((product: any) =>
        product.name.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  useEffect(() => {
    setFilteredProducts(products);
  }, []);

  /*   const closeListAndClearnbkjb = () => {
    setFocus(false);
  }; */
  const changeCategory = (category: string) => {
    {
      category === "all"
        ? [setProductCategories(initialState), setIsActive(-1)]
        : [
            setProductCategories(
              products.filter(
                (filter: any) => category === filter.category.$oid
              )
            ),
          ];
    }
  };

  return (
    <>
      {isProductsLoading === SliceStatus.pending ||
      isCategoriesLoading === SliceStatus.pending ? (
        <CustomActivityIndicator />
      ) : (
        <>
          <SearchInput
            focus={focus}
            onFocus={openList}
            closeList={closeList}
            searchProducts={searchProducts}
          />
          {focus ? (
            <SearchedProductsScreen
              navigation={navigation}
              filteredProducts={filteredProducts}
            />
          ) : (
            <ScrollView
              style={[
                {
                  backgroundColor: "gainsboro",
                  paddingBottom: 30,
                  marginTop: 4,
                },
              ]}
            >
              <View>
                <Banner />
              </View>
              <Categories
                categories={categories}
                categoryFilter={changeCategory}
                productCategories={productCategories}
                active={isActive}
                setActive={setIsActive}
              />
              {/*  {productCategories} */}

              {productCategories?.length > 0 ? (
                <View style={styles.container}>
                  {productCategories?.map((item: any) => (
                    <ProductList
                      key={item.id}
                      item={item}
                      navigation={navigation}
                    />
                  ))}
                </View>
              ) : (
                <Text textAlign="center" paddingTop={4} fontSize="lg">
                  Product Not Found
                </Text>
              )}
            </ScrollView>
          )}
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default ProductScreen;
