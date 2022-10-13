import { useContext, useState } from "react";
import Signup from "../components/Signup";
import { createUser } from "../helper/http-req";
import { useDispatch } from "react-redux";
import {
  hideNotification,
  showNotification,
} from "../features/notificationSlice";
import AuthContext from "../context/AuthProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "../components/Loading";

const SignupScreen = function (params) {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const authCtx = useContext(AuthContext);

  const onPressHandler = async (data) => {
    setIsLoading(true);
    const { name, email, password, confirmPassword } = data;
    const response = await createUser(name, email, password, confirmPassword);

    if (response?.error?.status === `Error`) {
      dispatch(
        showNotification({
          status: `error`,
          message: `Email Already exists`,
        })
      );
      setIsLoading(false);
      return;
    }

    dispatch(hideNotification());

    if (response.status === `Success`) {
      await AsyncStorage.setItem("token", response.token);

      authCtx.authenticate(response.token);
      authCtx.updatedUser({
        name: response.data.name,
        email: response.data.email,
        photo: response.data.photo,
      });
    }

    console.log(response);
  };

  if (isLoading) {
    return <Loading />;
  }

  return <Signup pressHandler={onPressHandler} />;
};

export default SignupScreen;
