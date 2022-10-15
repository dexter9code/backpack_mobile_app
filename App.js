import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { store } from "./store/store";
import AppStack from "./routes/AppStack";
import { AuthContextProvider } from "./context/AuthProvider";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <Provider store={store}>
        <AuthContextProvider>
          <AppStack />
        </AuthContextProvider>
      </Provider>
    </>
  );
}
