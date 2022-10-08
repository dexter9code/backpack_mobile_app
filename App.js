import { StatusBar } from "expo-status-bar";
import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { Provider } from "react-redux";
import { store } from "./store/store";
import SignupScreen from "./screens/SignupScreen";
import AllToursScreen from "./screens/AllToursScreen";
import TourScreen from "./screens/TourScreen";
import AccountScreen from "./screens/AccountScreen";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./routes/RootStack";
import AuthStack from "./routes/Auth";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <Provider store={store}>
        <NavigationContainer>
          {/* <RootStack /> */}
          <AuthStack />
        </NavigationContainer>
      </Provider>
    </>
  );
}
