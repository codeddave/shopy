import { View, Text } from "react-native";
import React from "react";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();
const CheckoutNavigator = () => {
  return (
    <View>
      <Text>CheckoutNavigator</Text>
    </View>
  );
};

export default CheckoutNavigator;
