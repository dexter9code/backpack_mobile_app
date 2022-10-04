import { StatusBar } from "expo-status-bar";
import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { Provider } from "react-redux";
import { store } from "./store/store";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <Provider store={store}>
        <LoginScreen />
      </Provider>
    </>
  );
}
