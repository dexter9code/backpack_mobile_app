import { View, StyleSheet, Image, Text } from "react-native";
import IconButton from "./common/IconButton";
import IconInput from "./common/IconInput";
import { colors } from "./../constants/colors";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  hideNotification,
  showNotification,
} from "../features/notificationSlice";

const Login = function ({ submitHandler }) {
  const dispatch = useDispatch();
  const notificaitonState = useSelector(
    (state) => state.Notification.notification
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChangeHandler = (e) => {
    setEmail(e);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e);
  };

  const onPressHandler = (e) => {
    if (!email || !password) {
      dispatch(
        showNotification({
          status: `error`,
          message: `Please fill the Input`,
        })
      );
      return;
    }

    dispatch(hideNotification());

    if (!email.includes("@")) {
      dispatch(
        showNotification({
          status: `error`,
          message: `Please fill the Input`,
        })
      );
      return;
    }
    dispatch(hideNotification());

    submitHandler({ email, password });
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/img/backpack-logo-trans.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.titleText}>Welcome Back </Text>

      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{notificaitonState?.message}</Text>
      </View>

      <IconInput
        iconName={"email"}
        placeHolder={`@example.com`}
        onChange={emailChangeHandler}
        style={styles.extra}
      />
      <IconInput
        iconName={"lock"}
        placeHolder={`Password`}
        EntryType={true}
        onChange={passwordChangeHandler}
        style={styles.extra}
      />
      <IconButton style={styles.btn} onPress={onPressHandler}>
        Login
      </IconButton>
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    padding: 8,
  },
  imageContainer: {
    width: 80,
    height: 80,
    marginTop: 50,
  },
  titleText: {
    marginBottom: 50,
    fontWeight: "bold",
    textTransform: "capitalize",
    fontSize: 18,
    color: colors.green500,
  },
  errorMessage: {
    color: colors.pink700,
    fontStyle: "italic",
    textAlign: "left",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  extra: {
    width: "100%",
  },
  btn: {
    width: "100%",
    borderRadius: 30,
    backgroundColor: colors.green500,
    borderColor: colors.greenGrad,
  },
  errorContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  errorText: {
    fontStyle: "italic",
    fontWeight: "600",
    color: colors.pink700,
    fontSize: 16,
  },
});
