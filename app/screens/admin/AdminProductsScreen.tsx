import React from "react";
import {
  CustomActivityIndicator,
  ListItem,
  SearchInput,
  useFetchProducts,
  useProducts,
  useSearchProducts,
} from "../../components";
import { Box, Text } from "native-base";
import { SliceStatus } from "../../interfaces";
import { FlatList } from "react-native";
import ListHeader from "../../components/admin/ListHeader";

const AdminProductsScreen = () => {
  const { products, isProductsLoading } = useFetchProducts();
  const { openList, closeList, focus } = useProducts();
  const {
    showSearchProducts,
    handleSearchProducts,
    searchedProducts,
    isLoadingSearchedProducts,
  } = useSearchProducts();
  return (
    <Box>
      {isProductsLoading === SliceStatus.pending ||
      isLoadingSearchedProducts === SliceStatus.pending ? (
        <CustomActivityIndicator />
      ) : (
        <>
          <SearchInput
            onFocus={openList}
            closeList={closeList}
            searchProducts={handleSearchProducts}
            focus={focus}
          />
          {showSearchProducts ? (
            <Box mt="2">
              <FlatList
                data={searchedProducts}
                ListHeaderComponent={ListHeader}
                renderItem={({ item }) => <ListItem item={item} />}
                keyExtractor={(item) => item.id}
              />
            </Box>
          ) : (
            <Box mt="2">
              <FlatList
                data={products}
                ListHeaderComponent={ListHeader}
                renderItem={({ item }) => <ListItem item={item} />}
                keyExtractor={(item) => item.id}
              />
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default AdminProductsScreen;
