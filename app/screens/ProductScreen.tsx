import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import data from "../../assets/data/products.json";

const ProductScreen = () => {
  const [products, setProducts] = useState<{}[]>([]);
  useEffect(() => {
    setProducts(data);
    return () => {
      setProducts([]);
    };
  }, []);
  return (
    <View>
      <Text>ProductScreen</Text>
      <FlatList
        data={products}
        renderItem={({ item }: any) => <Text> {item.brand}</Text>}
        keyExtractor={(item: any) => item.name}
      />
    </View>
  );
};

export default ProductScreen;
