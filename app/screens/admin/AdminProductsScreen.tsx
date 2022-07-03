import React from "react";
import {
  CustomActivityIndicator,
  SearchInput,
  useFetchProducts,
  useProducts,
} from "../../components";
import { Box, Image, Text } from "native-base";
import { SliceStatus } from "../../interfaces";
import { FlatList, StyleSheet } from "react-native";
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
              <TouchableOpacity style={styles.container}>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box w="1/6" h="10">
                    <Image
                      source={{
                        uri: "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png",
                      }}
                      resizeMode="contain"
                      w="full"
                      h="full"
                    />
                  </Box>

                  <Text numberOfLines={1} ellipsizeMode="tail" w="1/6">
                    {item.brand}
                  </Text>
                  <Text w="1/6" numberOfLines={1} ellipsizeMode="tail">
                    {item.name}
                  </Text>
                  <Text w="1/6" numberOfLines={1} ellipsizeMode="tail">
                    {item.category.name}
                  </Text>
                  <Text w="1/6"> ${item.price}</Text>
                </Box>
              </TouchableOpacity>
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
const styles = StyleSheet.create({
  container: {
    paddingBottom: 12,
  },
});
export default AdminProductsScreen;
