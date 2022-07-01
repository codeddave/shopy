import React from "react";
import {
  CustomActivityIndicator,
  SearchInput,
  useFetchProducts,
  useProducts,
} from "../../components";
import { Box, Text } from "native-base";
import { SliceStatus } from "../../interfaces";
import { FlatList } from "react-native";

const AdminProductsScreen = () => {
  const { products, isProductsLoading } = useFetchProducts();
  const { openList, closeList, focus } = useProducts();
  return (
    <Box>
      {isProductsLoading === SliceStatus.pending ? (
        <CustomActivityIndicator />
      ) : (
        <>
          <SearchInput
            onFocus={openList}
            closeList={closeList}
            searchProducts={() => console.log("khdv")}
            focus={focus}
          />
          <FlatList
            data={products}
            renderItem={({ item }) => <Text>{item.name}</Text>}
            keyExtractor={(item) => item.id}
          />
          {/*  {products.map((product) => (
            <>
             
            </>
          ))} */}
        </>
      )}
    </Box>
  );
};

export default AdminProductsScreen;
