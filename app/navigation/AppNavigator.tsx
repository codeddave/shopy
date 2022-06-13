import React, { useEffect } from "react";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "./HomeNavigator";
import { Alert, View } from "react-native";
import CartIcon from "../components/cart/CartIcon";
import CartNavigator from "./CartNavigator";
import UserNavigator from "./UserNavigator";
import { useDispatch, useSelector } from "react-redux";
import { logOut, selectUserToken } from "../redux";
import decode from "jwt-decode";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const userToken = useSelector(selectUserToken);
  const dispatch = useDispatch();

  useEffect(() => {
    Alert.alert("hi!!!");
    if (userToken) {
      const decodedToken = decode(userToken) as any;
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        dispatch(logOut());
      }
    }
  }, []);
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
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
        component={CartNavigator}
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
        name="Admin"
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
        component={UserNavigator}
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
