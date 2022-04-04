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

const SearchedProductsScreen = ({ filteredProducts }: any) => {
  return (
    <Box>
      <Heading>Results</Heading>
      <FlatList
        data={filteredProducts}
        renderItem={({ item }: any) => (
          <Box borderBottomWidth={1} borderColor="coolGray.200" py={2}>
            <HStack space={3} justifyContent="space-between">
              <Avatar size="48px" rounded="full" source={{ uri: item.url }} />
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
        )}
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
