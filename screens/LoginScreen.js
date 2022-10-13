import { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import Login from "../components/Login";
import { authenticate } from "../features/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  hideNotification,
  showNotification,
} from "../features/notificationSlice";
import { authenticated } from "../helper/http-req";
import { addUser, alreadyUser } from "../features/authentication-slice";
import AuthContext from "../context/AuthProvider";

const LoginScreen = function ({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const authCtx = useContext(AuthContext);
  const dispatch = useDispatch();
  const authee = useSelector((state) => state.Authorization.authentication);

  const onSubmitHandler = async (data) => {
    setIsLoading(true);
    dispatch(hideNotification());
    const { email, password } = data;

    try {
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
        setIsLoading(false);
        return;
      }

      if (response.status === `Success`) {
        await AsyncStorage.setItem("token", response.token);
        // dispatch(
        //   addUser({
        //     name: response.data.name,
        //     email: response.data.email,
        //   })
        // );
        dispatch(alreadyUser());
        authCtx.authenticate(response.token);
        authCtx.updatedUser({
          name: response.data.name,
          email: response.data.email,
          photo: response.data.photo,
        });
      }
    } catch (error) {
      dispatch(
        showNotification({
          status: `error`,
          message: `${error.message}`,
        })
      );
      setIsLoading(false);
      return;
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return <Login submitHandler={onSubmitHandler} />;
};

export default LoginScreen;
