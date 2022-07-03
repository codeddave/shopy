import React from "react";
import { Box, Text } from "native-base";

const ListHeader = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box w="1/6" h="4"></Box>
      <Text w="1/6" fontWeight="bold">
        Brand
      </Text>
      <Text w="1/6" fontWeight="bold">
        Name
      </Text>
      <Text w="1/6" fontWeight="bold">
        Category
      </Text>
      <Text w="1/6" fontWeight="bold">
        Price
      </Text>
    </Box>
  );
};

export default ListHeader;
