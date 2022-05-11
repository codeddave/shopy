import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CartScreen, CheckoutScreen } from "../screens";

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
        name="Home"
        component={CheckoutScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default CartNavigator;
