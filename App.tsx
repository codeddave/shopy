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
        <View style={styles.container}>
          <Header />
          <AppNavigator />
        </View>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
