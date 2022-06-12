import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen, RegisterScreen } from "../screens";
import { useSelector } from "react-redux";
import { selectUser } from "../redux";
import UserScreen from "../screens/UserScreen";
const Stack = createStackNavigator();
const UserNavigator = () => {
  const user = useSelector(selectUser);
  return (
    <Stack.Navigator>
      {user ? (
        <Stack.Screen
          name="user"
          component={UserScreen}
          options={{
            headerShown: false,
          }}
        />
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{
              headerShown: false,
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default UserNavigator;
