import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AdminOrdersScreen } from "../screens";
import AdminCategoriesScreen from "../screens/admin/AdminCategoriesScreen";
import AdminProductsScreen from "../screens/admin/AdminProductsScreen";

const Stack = createStackNavigator();
const AdminNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AdminProductsScreen"
        component={AdminProductsScreen}
        options={{
          title: "Products",
        }}
      />
      <Stack.Screen name="AdminOrdersScreen" component={AdminOrdersScreen} />

      <Stack.Screen
        name="AdmincategoriesScreen"
        component={AdminCategoriesScreen}
      />
    </Stack.Navigator>
  );
};

export default AdminNavigator;
