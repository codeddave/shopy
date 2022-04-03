import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import data from "../../assets/data/products.json";
import ProductList from "../components/products/ProductList";
import { Container, Input, HStack, Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
const ProductScreen = () => {
  const [products, setProducts] = useState<{}[]>([]);
  useEffect(() => {
    setProducts(data);
    return () => {
      setProducts([]);
    };
  }, []);
  return (
    <>
      <Input
        placeholder="Search"
        width="100%"
        variant="filled"
        borderRadius="10"
        py="1"
        px="2"
        borderWidth="0"
        InputLeftElement={
          <Icon
            ml="2"
            size="4"
            color="gray.400"
            as={<MaterialIcons name="search" />}
          />
        }
      />
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
    </>
  );
};

export default ProductScreen;
