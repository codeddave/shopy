import React, { useEffect } from "react";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "./HomeNavigator";
import { View } from "react-native";
import CartIcon from "../components/cart/CartIcon";
import CartNavigator from "./CartNavigator";
import UserNavigator from "./UserNavigator";
import { useDispatch, useSelector } from "react-redux";
import { logOut, selectUserToken } from "../redux";
import decode from "jwt-decode";
import useFetchUserProfile from "../components/hooks/apiHooks/useFetchUserProfile";
import AdminNavigator from "./AdminNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const userToken = useSelector(selectUserToken);
  const dispatch = useDispatch();

  useEffect(() => {
    //export to a hook
    if (userToken) {
      const decodedToken = decode(userToken) as any;
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        dispatch(logOut());
      }
    }
  }, []);
  const { userProfile, user } = useFetchUserProfile();
  const tabColor = (focused: boolean) => {
    if (focused) {
      return "#22c55e";
    } else {
      return "grey";
    }
  };
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, focused }) => (
            <MaterialCommunityIcons
              name="home"
              size={size}
              color={tabColor(focused)}
            />
          ),
          tabBarInactiveTintColor: "grey",
          tabBarActiveTintColor: "#22c55e",
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, focused }) => (
            <View>
              <MaterialCommunityIcons
                name="cart-outline"
                size={size}
                color={tabColor(focused)}
              />
              <CartIcon />
            </View>
          ),
          tabBarInactiveTintColor: "grey",
          tabBarActiveTintColor: "#22c55e",
        }}
      />
      {user && userProfile ? (
        <Tab.Screen
          name="Admin"
          component={AdminNavigator}
          options={{
            headerShown: false,

            tabBarIcon: ({ size, focused }) => (
              <MaterialIcons
                name="verified-user"
                size={size}
                color={tabColor(focused)}
              />
            ),
            tabBarInactiveTintColor: "grey",
            tabBarActiveTintColor: "#22c55e",
          }}
        />
      ) : null}

      <Tab.Screen
        name="User"
        component={UserNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, focused }) => (
            <MaterialCommunityIcons
              name="account"
              size={size}
              color={tabColor(focused)}
            />
          ),
          tabBarInactiveTintColor: "grey",
          tabBarActiveTintColor: "#22c55e",
        }}
      />
    </Tab.Navigator>
  );
};
export default AppNavigator;
