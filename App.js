import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./routes/RootStack";
import AuthStack from "./routes/Auth";
import AppStack from "./routes/AppStack";
import Loading from "./components/Loading";
import { AuthContextProvider } from "./context/AuthProvider";
import SettingScreen from "./screens/SettingScreen";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <Provider store={store}>
        <AuthContextProvider>
          {/* <AppStack /> */}
          <SettingScreen />
        </AuthContextProvider>
        {/* <NavigationContainer>
          <RootStack />
          <AuthStack />
        </NavigationContainer> */}
      </Provider>
    </>
  );
}
