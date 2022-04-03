//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from "react-native";
import Header from "./app/components/shared/Header";
import ProductScreen from "./app/screens/ProductScreen";
import { NativeBaseProvider } from "native-base";
export default function App() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Header />
        <ProductScreen />
      </View>
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
