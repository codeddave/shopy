//import { StatusBar } from 'expo-status-bar';
import Header from "./app/components/shared/Header";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator, navigationRef } from "./app/navigation";
import { Provider } from "react-redux";
import store from "./app/redux/store";
export default function App() {
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <NavigationContainer ref={navigationRef as any}>
          <Header />
          <AppNavigator />
        </NavigationContainer>
      </Provider>
    </NativeBaseProvider>
  );
}
