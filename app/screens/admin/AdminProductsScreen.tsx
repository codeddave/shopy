import React from "react";
import {
  CustomActivityIndicator,
  SearchInput,
  useFetchProducts,
  useProducts,
} from "../../components";
import { Box, Image, Text } from "native-base";
import { SliceStatus } from "../../interfaces";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

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
            renderItem={({ item }) => (
              <Box>
                <TouchableOpacity>
                  <Image source={{ uri: item.image ? item.image : "" }} />

                  <Text> {item.brand}</Text>
                  <Text numberOfLines={1} ellipsizeMode="tail">
                    {" "}
                    {item.name}
                  </Text>
                </TouchableOpacity>
              </Box>
            )}
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
