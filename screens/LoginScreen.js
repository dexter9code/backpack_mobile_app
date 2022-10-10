import { useState } from "react";
import { useDispatch } from "react-redux";
import Login from "../components/Login";
import { authenticate } from "../features/authSlice";
import {
  hideNotification,
  showNotification,
} from "../features/notificationSlice";
import { authenticated } from "../helper/http-req";

const LoginScreen = function (props) {
  const dispatch = useDispatch();

  const onSubmitHandler = async (data) => {
    const { email, password } = data;

    const response = await authenticated(email, password);

    if (
      response?.error?.status === `Error` ||
      response?.error?.status === `Fail`
    ) {
      dispatch(
        showNotification({
          status: `error`,
          message: `Incorrect Email or Passwrod`,
        })
      );
      return;
    }

    dispatch(hideNotification());

    if (response.status === `Success`) {
      dispatch(authenticate(response.token));
      return;
    }
  };

  return <Login submitHandler={onSubmitHandler} />;
};

export default LoginScreen;
