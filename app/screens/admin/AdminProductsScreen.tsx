import React from "react";
import {
  CustomActivityIndicator,
  SearchInput,
  useFetchProducts,
  useProducts,
} from "../../components";
import { Box, Text } from "native-base";
import { SliceStatus } from "../../interfaces";

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
          {products.map((product) => (
            <>
              <Text>{product.name}</Text>
            </>
          ))}
        </>
      )}
    </Box>
  );
};

export default AdminProductsScreen;
