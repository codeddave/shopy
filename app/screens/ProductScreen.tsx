import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import data from "../../assets/data/products.json";
import ProductList from "../components/products/ProductList";
import { Input, Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import SearchedProductsScreen from "./SearchedProductsScreen";
const ProductScreen = () => {
  const [filteredProducts, setFilteredProducts] = useState<{}[]>([]);
  const [products, setProducts] = useState<{}[]>([]);

  const [focus, setFocus] = useState(false);
  useEffect(() => {
    setProducts(data);
    setFilteredProducts(data);
    return () => {
      setProducts([]);
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
