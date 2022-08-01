import { StyleSheet, TouchableOpacity, Modal } from "react-native";
import React, { FC } from "react";
import { Box, Button, Icon, Image, Text } from "native-base";
import { useToggle } from "../hooks";
import { TouchableHighlight } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { NavigationScreenProp } from "react-navigation";

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
  navigation: NavigationScreenProp<any, any>;
};
export const ListItem: FC<Props> = ({ item, navigation }) => {
  const { toggleOn: modalVisible, onToggleClick: toggleModalVisible } =
    useToggle();
  const navigateToProductForm = () => {
    navigation.navigate("Home");
    toggleModalVisible();
  };
  return (
    <Box>
      <Modal
        animationType="fade"
        transparent
        visible={modalVisible}
        onRequestClose={toggleModalVisible}
      >
        <Box
          flex="1"
          alignItems="center"
          justifyContent="center"
          bgColor="transparent"
        >
          <Box
            h="32"
            w="40"
            bgColor="white"
            alignItems="center"
            justifyContent="center"
          >
            <TouchableOpacity
              style={{
                position: "absolute",
                right: 8,
                alignSelf: "flex-end",
                top: 8,
              }}
              onPress={() => {
                toggleModalVisible();
                console.log("heree");
              }}
            >
              <Icon
                size="3"
                color="gray.600"
                as={<MaterialIcons name="close" />}
              />
            </TouchableOpacity>
            <Button variant="unstyled" mt="2" onPress={navigateToProductForm}>
              Edit
            </Button>
            <Button variant="unstyled">Delete</Button>
          </Box>
        </Box>
      </Modal>

      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          navigateToProductForm();
          console.log("heree");
        }}
        onLongPress={toggleModalVisible}
      >
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
    </Box>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingBottom: 12,
    paddingTop: 4,
  },
});
export default ListItem;
