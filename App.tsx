//import { StatusBar } from 'expo-status-bar';
import Header from "./app/components/shared/Header";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator, navigationRef } from "./app/navigation";
import { Provider } from "react-redux";
import store, { persistor } from "./app/redux/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer ref={navigationRef as any}>
            <Header />
            <AppNavigator />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </NativeBaseProvider>
  );
}
