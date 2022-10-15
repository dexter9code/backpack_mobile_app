import Account from "./../components/Account";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import Offline from "../components/Offine";
import Error404 from "../components/other/404";

const AccountScreen = function (props) {
  const authCtx = useContext(AuthContext);

  const user = authCtx.user;

  const logoutPressHandler = (e) => {
    authCtx.logout();
  };

  return (
    <>
      <Offline />
      <Account logoutHandler={logoutPressHandler} userData={user} />
    </>
  );
};

export default AccountScreen;
