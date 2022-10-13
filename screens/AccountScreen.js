import Account from "./../components/Account";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const AccountScreen = function (props) {
  const authCtx = useContext(AuthContext);

  const user = authCtx.user;

  const logoutPressHandler = (e) => {
    authCtx.logout();
  };

  return <Account logoutHandler={logoutPressHandler} userData={user} />;
};

export default AccountScreen;
