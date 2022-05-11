import React from "react";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "./HomeNavigator";
import { CartScreen } from "../screens";
import { View } from "react-native";
import CartIcon from "../components/cart/CartIcon";
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home "
        component={HomeNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <View>
              <MaterialCommunityIcons
                name="cart-outline"
                size={size}
                color={color}
              />
              <CartIcon />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name=" Admin"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="verified-user" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="User"
        component={HomeNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default AppNavigator;
