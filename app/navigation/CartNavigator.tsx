import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CartScreen } from "../screens";
import CheckoutNavigator from "./CheckoutNavigator";

const Stack = createStackNavigator();
const CartNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Checkout"
        component={CheckoutNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default CartNavigator;
