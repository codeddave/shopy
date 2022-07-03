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
      <Text w="1/6">Brand</Text>
      <Text w="1/6">Name</Text>
      <Text w="1/6">Category</Text>
      <Text w="1/6">Price</Text>
    </Box>
  );
};

export default ListHeader;
