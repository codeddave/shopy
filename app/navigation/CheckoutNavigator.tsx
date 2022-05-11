import React from "react";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { CheckoutScreen, ConfirmScreen, PaymentScreen } from "../screens";

const Tab = createMaterialTopTabNavigator();
const CheckoutNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Checkout" component={CheckoutScreen} />
      <Tab.Screen name="Confirm" component={ConfirmScreen} />
      <Tab.Screen name="Payment" component={PaymentScreen} />
    </Tab.Navigator>
  );
};

export default CheckoutNavigator;
