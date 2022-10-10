import Signup from "../components/Signup";
import { createUser } from "../helper/http-req";
import { useDispatch } from "react-redux";
import {
  hideNotification,
  showNotification,
} from "../features/notificationSlice";
import { authenticate } from "../features/authSlice";

const SignupScreen = function (params) {
  const dispatch = useDispatch();

  const onPressHandler = async (data) => {
    const { name, email, password, confirmPassword } = data;
    const response = await createUser(name, email, password, confirmPassword);

    if (response?.error?.status === `Error`) {
      dispatch(
        showNotification({
          status: `error`,
          message: `Email Already exists`,
        })
      );
      return;
    }

    dispatch(hideNotification());

    if (response.status === `Success`) {
      dispatch(authenticate(response.token));
    }

    console.log(response);
  };

  return <Signup pressHandler={onPressHandler} />;
};

export default SignupScreen;
