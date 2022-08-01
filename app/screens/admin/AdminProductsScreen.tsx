import React from "react";
import {
  CustomActivityIndicator,
  ListItem,
  SearchInput,
  useFetchProducts,
  useProducts,
  useSearchProducts,
} from "../../components";
import { Box } from "native-base";
import { SliceStatus } from "../../interfaces";
import { FlatList } from "react-native";
import ListHeader from "../../components/admin/ListHeader";
import { NavigationScreenProp } from "react-navigation";

type Props = {
  navigation: NavigationScreenProp<any, any>;
};
const AdminProductsScreen = ({ navigation }: Props) => {
  const { products, isProductsLoading } = useFetchProducts();
  const { openList, closeList, focus } = useProducts();
  const {
    showSearchProducts,
    handleSearchProducts,
    searchedProducts,
    isLoadingSearchedProducts,
  } = useSearchProducts();
  /*  const handleCloseList = () => {
    closeList();
  }; */
  return (
    <Box>
      <SearchInput
        onFocus={openList}
        closeList={closeList}
        searchProducts={handleSearchProducts}
        focus={focus}
      />
      {isProductsLoading === SliceStatus.pending ||
      isLoadingSearchedProducts === SliceStatus.pending ? (
        <CustomActivityIndicator />
      ) : (
        <>
          {showSearchProducts ? (
            <Box mt="2">
              <FlatList
                data={searchedProducts}
                ListHeaderComponent={ListHeader}
                renderItem={({ item }) => (
                  <ListItem item={item} navigation={navigation} />
                )}
                keyExtractor={(item) => item.id}
              />
            </Box>
          ) : (
            <Box mt="2">
              <FlatList
                data={products}
                ListHeaderComponent={ListHeader}
                renderItem={({ item }) => (
                  <ListItem item={item} navigation={navigation} />
                )}
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
