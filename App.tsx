//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from "react-native";
import Header from "./app/components/shared/Header";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator } from "./app/navigation";
export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Header />
        <AppNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
