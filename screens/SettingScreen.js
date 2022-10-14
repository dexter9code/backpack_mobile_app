import Setting from "../components/Setting";
import {
  updateUserImage,
  updateUserName,
  updateUserPassword,
} from "../helper/http-req";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SettingScreen = function () {
  const authCtx = useContext(AuthContext);

  const token = authCtx?.token;

  async function onUsernameChangeHandler(name) {
    if (token) {
      const data = await updateUserName(name, token);
      authCtx.updatedUser({
        name: data?.data.updatedUser.name,
        email: data?.data.updatedUser.email,
        photo: data?.data.updatedUser.photo,
      });
    }
  }

  async function updateUserImageHandler(uri) {
    if (token) {
      const user = await updateUserImage(uri, token);
      authCtx.updatedUser({
        name: user?.data.updatedUser.name,
        email: user?.data.updatedUser.email,
        photo: user?.data.updatedUser.photo,
      });
    }
  }

  async function updatePasswordHandler(userPass) {
    if (token) {
      const user = await updateUserPassword(userPass, token);
      await AsyncStorage.setItem("token", user.token);
      authCtx.authenticate(user.token);
    }
  }

  const currentUser = authCtx?.user;

  return (
    <Setting
      nameHandler={onUsernameChangeHandler}
      user={currentUser}
      imageHandler={updateUserImageHandler}
      passwordHandler={updatePasswordHandler}
    />
  );
};

export default SettingScreen;
