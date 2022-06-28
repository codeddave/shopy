import { ActivityIndicator } from "react-native";
import React from "react";
import { VStack } from "native-base";

export const CustomActivityIndicator = () => {
  return (
    <VStack alignItems="center" justifyContent="center" height="100%">
      <ActivityIndicator />
    </VStack>
  );
};
