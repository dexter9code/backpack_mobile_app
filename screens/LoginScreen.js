import { useState } from "react";
import { useDispatch } from "react-redux";
import Login from "../components/Login";
import { addError, removeError } from "../features/errorSlice";

const LoginScreen = function (props) {
  const dispatch = useDispatch();

  const [enteredEmail, setEnteredEmail] = useState();
  const [enteredPassword, setEnteredPassword] = useState();
  const [inputValid, setInputValid] = useState(null);

  const emailInputHandler = (e) => {
    setInputValid(null);
    setEnteredEmail(e);
  };
  const passwordInputHandler = (e) => {
    setInputValid(null);
    setEnteredPassword(e);
  };

  const onSubmitHandler = (e) => {
    if (!enteredEmail || !enteredPassword) {
      setInputValid({
        status: "error",
        message: `Please fill the form`,
      });
      return;
    }

    if (!enteredEmail.includes("@")) {
      setInputValid({
        status: `error`,
        message: `Enter valid Email`,
      });
      return;
    }

    console.log({ enteredEmail, enteredPassword });
    setEnteredEmail("");
    setEnteredPassword("");
  };

  return (
    <Login
      emailHandler={emailInputHandler}
      passwordHandler={passwordInputHandler}
      submitHandler={onSubmitHandler}
      inputValid={inputValid}
    />
  );
};

export default LoginScreen;
