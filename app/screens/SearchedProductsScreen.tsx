import {
  Text,
  Box,
  Heading,
  FlatList,
  HStack,
  Avatar,
  VStack,
} from "native-base";
import React from "react";
//import { StyleSheet, View } from "react-native";

type Props = {
  filteredProducts: any[];
};
const SearchedProductsScreen = ({ filteredProducts }: Props) => {
  return (
    <Box width="90%" height="100%">
      <Heading>Results</Heading>
      <FlatList
        data={filteredProducts}
        renderItem={({ item }: any) => {
          return filteredProducts.length ? (
            <Box borderBottomWidth={1} borderColor="coolGray.200" py={2}>
              <HStack space={3}>
                <Avatar
                  size="48px"
                  rounded="full"
                  source={{ uri: item.image }}
                />
                <VStack>
                  <Text color="coolGray.800" bold>
                    {item.name}
                  </Text>
                  <Text color="coolGray.600">{item.price}</Text>
                </VStack>
                {/*  <Spacer />
              <Text
                fontSize="xs"
               
                color="coolGray.800"
                alignSelf="flex-start">
                {item.timeStamp}
              </Text> */}
              </HStack>
            </Box>
          ) : (
            <Text color="black"> No results found</Text>
          );
        }}
        keyExtractor={(item: any) => item.name}
      />
    </Box>
  );
};

/* const styles = StyleSheet.create({
    container: {

    }
}) */

export default SearchedProductsScreen;
