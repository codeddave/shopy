import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import data from "../../assets/data/products.json";
import ProductList from "../components/products/ProductList";

const ProductScreen = () => {
  const [products, setProducts] = useState<{}[]>([]);
  useEffect(() => {
    setProducts(data);
    return () => {
      setProducts([]);
    };
  }, []);
  return (
    <View
      style={{
        backgroundColor: "gainsboro",
        paddingBottom: 30,
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
  );
};

export default ProductScreen;
