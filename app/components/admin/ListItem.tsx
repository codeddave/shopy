import { StyleSheet, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { Box, Image, Text } from "native-base";

type ProductData = {
  name: string;
  price: number;
  countInStock: number;
  image: string;
  id: string;
  brand: string;
  category: {
    name: string;
    icon: string;
    image: string;
    color: string;
  };
};
type Props = {
  item: ProductData;
};
export const ListItem: FC<Props> = ({ item }) => {
  return (
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
  );
};
const styles = StyleSheet.create({
  container: {
    paddingBottom: 12,
    paddingTop: 4,
  },
});
export default ListItem;
