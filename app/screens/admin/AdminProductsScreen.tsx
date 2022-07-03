import React from "react";
import {
  CustomActivityIndicator,
  ListItem,
  SearchInput,
  useFetchProducts,
  useProducts,
} from "../../components";
import { Box, Image, Text } from "native-base";
import { SliceStatus } from "../../interfaces";
import { FlatList } from "react-native";
import ListHeader from "../../components/admin/ListHeader";

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
          <Box mt="2">
            <FlatList
              data={products}
              ListHeaderComponent={ListHeader}
              renderItem={({ item }) => <ListItem item={item} />}
              keyExtractor={(item) => item.id}
            />
          </Box>
        </>
      )}
    </Box>
  );
};

export default AdminProductsScreen;
