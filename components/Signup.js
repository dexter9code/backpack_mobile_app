import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
  Text,
} from "react-native";
import IconButton from "./common/IconButton";
import IconInput from "./common/IconInput";
import { colors } from "./../constants/colors";
import { useDispatch, useSelector } from "react-redux";
import {
  hideNotification,
  showNotification,
} from "../features/notificationSlice";

const cond = `/^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/`;

const Signup = function ({ pressHandler }) {
  const dispatch = useDispatch();
  const notificaitonState = useSelector(
    (state) => state.Notification.notification
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const nameChangeHandler = (e) => {
    setName(e);
  };
  const emailChangeHandler = (e) => {
    setEmail(e);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e);
  };
  const confirmPasswordChangeHandler = (e) => {
    setConfirmPassword(e);
  };

  const onSubmitHandler = (e) => {
    if (!name || !email || !password || !confirmPassword) {
      dispatch(
        showNotification({
          status: `error`,
          message: `Please fill the input`,
        })
      );
      return;
    }
    dispatch(hideNotification());

    if (password !== confirmPassword) {
      dispatch(
        showNotification({
          status: `error`,
          message: `Password Mis-Match`,
        })
      );
      return;
    }
    dispatch(hideNotification());

    if (!email.includes("@")) {
      dispatch(
        showNotification({
          status: `error`,
          message: `Invalid Email provided`,
        })
      );
      return;
    }
    dispatch(hideNotification());

    pressHandler({ name, email, password, confirmPassword });
  };

  return (
    <LinearGradient
      style={styles.colorContainer}
      colors={[
        "#11acba",
        "#00b5bc",
        "#00bdbb",
        "#00c5b8",
        "#00cdb2",
        "#00d5aa",
        "#00dca0",
        "#27e394",
      ]}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.rootContainer}
      >
        <View style={styles.titleContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/adaptive-icon.png")}
              style={styles.image}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>
              Welcome to backpack {"\n"}
              <Text style={styles.subText}>
                create a account and find your next desire {"\n"} Destination
                and create infinite memories
              </Text>
            </Text>
          </View>
        </View>
        <View style={styles.errorContainer}>
          {notificaitonState && (
            <Text style={styles.errorText}>{notificaitonState?.message}</Text>
          )}
        </View>

        <IconInput
          iconName={`account`}
          onChange={nameChangeHandler}
          placeHolder={`Username`}
          style={styles.input}
        />
        <IconInput
          iconName={`email`}
          onChange={emailChangeHandler}
          placeHolder={`@example.com`}
          style={styles.input}
        />
        <IconInput
          iconName={`lock`}
          onChange={passwordChangeHandler}
          placeHolder={`Password`}
          style={styles.input}
          EntryType={true}
        />
        <IconInput
          iconName={`lock`}
          onChange={confirmPasswordChangeHandler}
          placeHolder={`Confrim Password`}
          style={styles.input}
          EntryType={true}
        />
        <IconButton style={styles.button} onPress={onSubmitHandler}>
          Sign-up
        </IconButton>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default Signup;

const styles = StyleSheet.create({
  colorContainer: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 10,
    marginTop: 50,
  },
  input: {
    width: "100%",
  },
  button: {
    width: "100%",
    borderColor: colors.white500,
    backgroundColor: colors.logoOrange,
    borderRadius: 22,
  },
  titleContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 20,
  },
  imageContainer: {
    width: 100,
    height: 100,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    paddingTop: 22,
  },
  titleText: {
    textTransform: "uppercase",
    fontWeight: "bold",
    textAlign: "left",
    fontSize: 19,
    color: colors.green500,
  },
  subText: {
    textTransform: "capitalize",
    textAlign: "left",
    fontSize: 10,
    fontWeight: "500",
    color: colors.gray300,
  },
  errorContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontStyle: "italic",
    fontWeight: "600",
    color: colors.pink700,
    fontSize: 16,
  },
});
