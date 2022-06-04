import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Screen = createStackNavigator();
const UserNavigator = () => {
  return <Screen.Navigator></Screen.Navigator>;
};

export default UserNavigator;
