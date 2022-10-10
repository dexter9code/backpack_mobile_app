import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./routes/RootStack";
import AuthStack from "./routes/Auth";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <Provider store={store}>
        <NavigationContainer>
          <RootStack />
          {/* <AuthStack /> */}
        </NavigationContainer>
      </Provider>
    </>
  );
}
