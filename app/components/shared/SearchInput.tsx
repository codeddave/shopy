import React, { FC } from "react";
import { Icon, Input } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  focus: boolean;
  onFocus: () => void;
  onChangeText: () => void;
  searchProducts: (text: string) => void;
  closeList: () => void;
};
export const SearchInput: FC<Props> = ({
  focus,
  onFocus,
  searchProducts,
  closeList,
}) => {
  return (
    <Input
      placeholder="Search"
      width="100%"
      variant="filled"
      backgroundColor="whitesmoke"
      borderRadius="10"
      onFocus={onFocus}
      onChangeText={(text) => searchProducts(text)}
      py="1"
      px="2"
      borderWidth="0"
      InputLeftElement={
        <Icon
          ml="2"
          size="4"
          color="gray.600"
          as={<MaterialIcons name="search" />}
        />
      }
      InputRightElement={
        focus ? (
          <Icon
            mr="2"
            size="3"
            color="gray.600"
            as={<MaterialIcons name="close" onPress={closeList} />}
          />
        ) : null
      }
    />
  );
};
