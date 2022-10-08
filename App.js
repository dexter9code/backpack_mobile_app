import { StatusBar } from "expo-status-bar";
import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { Provider } from "react-redux";
import { store } from "./store/store";
import SignupScreen from "./screens/SignupScreen";
import AllToursScreen from "./screens/AllToursScreen";
import TourScreen from "./screens/TourScreen";
import AccountScreen from "./screens/AccountScreen";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <Provider store={store}>
        {/* <LoginScreen /> */}
        {/* <WelcomeScreen /> */}
        {/* <SignupScreen /> */}
        {/* <AllToursScreen /> */}
        {/* <TourScreen /> */}
        <AccountScreen />
      </Provider>
    </>
  );
}
