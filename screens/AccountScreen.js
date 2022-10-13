import Account from "./../components/Account";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const AccountScreen = function (props) {
  const authCtx = useContext(AuthContext);

  const logoutPressHandler = (e) => {
    authCtx.logout();
  };

  return <Account logoutHandler={logoutPressHandler} />;
};

export default AccountScreen;
