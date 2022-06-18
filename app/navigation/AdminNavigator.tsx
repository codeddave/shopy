import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AdminOrdersScreen } from "../screens";

const Stack = createStackNavigator();
const AdminNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AdminOrdersScreen" component={AdminOrdersScreen} />
    </Stack.Navigator>
  );
};

export default AdminNavigator;
