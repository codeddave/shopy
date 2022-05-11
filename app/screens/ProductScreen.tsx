import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import data from "../../assets/data/products.json";
import categoriesData from "../../assets/data/categories.json";
import { NavigationScreenProp } from "react-navigation";
import ProductList from "../components/products/ProductList";
import { Input, Icon, ScrollView, Text } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import SearchedProductsScreen from "./SearchedProductsScreen";
import Banner from "../components/shared/Banner";
import Categories from "../components/categories/Categories";

type Props = {
  navigation: NavigationScreenProp<any, any>;
};
const ProductScreen = ({ navigation }: Props) => {
  const [filteredProducts, setFilteredProducts] = useState<{}[]>([]);
  const [products, setProducts] = useState<{}[]>([]);
  const [categories, setCategories] = useState<{}[]>([]);
  const [productCategories, setProductCategories] = useState<{}[]>([]);

  const [isActive, setIsActive] = useState<number>(-1);
  const [initialState, setInitialState] = useState<{}[]>([]);

  const [focus, setFocus] = useState(false);
  useEffect(() => {
    setProducts(data);
    setFilteredProducts(data);
    setInitialState(data);
    setCategories(categoriesData);
    setProductCategories(data);

    return () => {
      setProducts([]);
      setFilteredProducts([]);
      setCategories([]);
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
  };
  const closeList = () => {
    setFocus(false);
  };
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
      <Input
        placeholder="Search"
        width="100%"
        variant="filled"
        backgroundColor="whitesmoke"
        borderRadius="10"
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

          {productCategories.length > 0 ? (
            <View style={styles.container}>
              {productCategories.map((item: any) => (
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
