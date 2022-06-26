import { ActivityIndicator } from "react-native";
import React from "react";
import { VStack } from "native-base";

const CustomActivityIndicator = () => {
  return (
    <VStack alignItems="center" justifyContent="center" height="100%">
      <ActivityIndicator />
    </VStack>
  );
};

export default CustomActivityIndicator;
