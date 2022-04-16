import React, { useEffect, useState } from "react";
import { Alert, FlatList, View } from "react-native";
import data from "../../assets/data/products.json";
import categoriesData from "../../assets/data/categories.json";

import ProductList from "../components/products/ProductList";
import { Input, Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import SearchedProductsScreen from "./SearchedProductsScreen";
import Banner from "../components/shared/Banner";
const ProductScreen = () => {
  const [filteredProducts, setFilteredProducts] = useState<{}[]>([]);
  const [products, setProducts] = useState<{}[]>([]);
  const [categories, setCategories] = useState<{}[]>([]);

  const [isActive, setIsActive] = useState();
  const [initialState, setInitialState] = useState<{}[]>([]);

  const [focus, setFocus] = useState(false);
  useEffect(() => {
    setProducts(data);
    setFilteredProducts(data);
    setInitialState(data);

    return () => {
      setProducts([]);
      setFilteredProducts([]);
    };
  }, []);
  const searchProducts = (text: string) => {
    text === "" ? setFocus(false) : setFocus(true);
    setFilteredProducts(
      products.filter((product: any) =>
        product.name.toLowerCase().includes(text.toLowerCase())
      )
    );
  };
  const openList = () => {
    setFocus(true);
    Alert.alert("List");
  };
  const closeList = () => {
    setFocus(false);
  };
  /*   const closeListAndClearnbkjb = () => {
    setFocus(false);
  }; */
  return (
    <>
      <Input
        placeholder="Search"
        width="100%"
        variant="filled"
        backgroundColor="whitesmoke"
        borderRadius="10"
        onBlur={closeList}
        onFocus={openList}
        onChangeText={(text) => searchProducts(text)}
        py="1"
        px="2"
        borderWidth="0"
        InputLeftElement={
          <Icon
            ml="2"
            size="4"
            color="gray.600"
            as={<MaterialIcons name="search" />}
          />
        }
        InputRightElement={
          focus ? (
            <Icon
              mr="2"
              size="3"
              color="gray.600"
              as={<MaterialIcons name="close" onPress={closeList} />}
            />
          ) : null
        }
      />
      {focus ? (
        <SearchedProductsScreen filteredProducts={filteredProducts} />
      ) : (
        <View
          style={{
            backgroundColor: "gainsboro",
            paddingBottom: 30,
            marginTop: 4,
          }}
        >
          <Banner />
          <FlatList
            scrollEnabled
            numColumns={2}
            data={products}
            renderItem={({ item }: any) => (
              <ProductList key={item.id} item={item} />
            )}
            keyExtractor={(item: any) => item.name}
          />
        </View>
      )}
    </>
  );
};

export default ProductScreen;
