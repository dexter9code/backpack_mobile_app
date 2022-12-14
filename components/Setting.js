import { useState } from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { colors } from "./../constants/colors";
import NormalButton from "./common/NormalButton";
import PlainInput from "./common/PlainInput";
import { useDispatch, useSelector } from "react-redux";
import {
  hideNotification,
  showNotification,
} from "../features/notificationSlice";
import ImagePicker from "./common/ImagePicker";

const Setting = function ({
  nameHandler,
  user,
  imageHandler,
  passwordHandler,
}) {
  const dispatch = useDispatch();
  const notificationState = useSelector(
    (state) => state.Notification.notification
  );

  const [userName, setUserName] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const onUsernameChangeHandler = (e) => setUserName(e);
  const onCurrentPasswordChangeHandler = (e) => setCurrentPassword(e);
  const onnewPasswordChangeHandler = (e) => setNewPassword(e);
  const onConfirmPasswordChangeHandler = (e) => setConfirmNewPassword(e);

  const updateUserNameHandler = (e) => {
    if (!userName) return;
    nameHandler(userName);
  };

  const onSumbmitHandler = () => {
    dispatch(hideNotification());

    if (!currentPassword || !newPassword || !confirmNewPassword) {
      dispatch(
        showNotification({
          status: `error`,
          message: `Please fill the input`,
        })
      );
      return;
    }

    if (newPassword !== confirmNewPassword) {
      dispatch(
        showNotification({
          status: `error`,
          message: `Password don't match `,
        })
      );
      return;
    }

    passwordHandler({
      currentPassword,
      password: newPassword,
      confirmPassword: confirmNewPassword,
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.rootContainer}
    >
      <ScrollView>
        <View style={styles.container}>
          <ImagePicker
            currentUserImage={user.image}
            updateImgHandler={imageHandler}
          />
        </View>
        <View style={styles.container}>
          <PlainInput
            labelTitle={`email`}
            defaultTitle={user.email}
            style={styles.container}
            showButton={false}
            isEditable={false}
          />
          <PlainInput
            labelTitle={`name`}
            defaultTitle={user.name}
            style={styles.container}
            showButton={true}
            onchangeHandler={onUsernameChangeHandler}
            updateHandler={updateUserNameHandler}
          />
        </View>
        <View style={styles.passwordContainer}>
          <Text style={styles.passwordTitleTxt}>Password setting</Text>
          {notificationState && (
            <Text style={styles.errorText}>{notificationState?.message}</Text>
          )}
          <PlainInput
            labelTitle={`current Password`}
            inputPlaceholder={`?????????????????????`}
            showButton={false}
            onchangeHandler={onCurrentPasswordChangeHandler}
            secureType={true}
          />
          <PlainInput
            labelTitle={`new Password`}
            inputPlaceholder={`?????????????????????`}
            showButton={false}
            onchangeHandler={onnewPasswordChangeHandler}
            secureType={true}
          />
          <PlainInput
            labelTitle={`confirm Password`}
            inputPlaceholder={`?????????????????????`}
            showButton={false}
            onchangeHandler={onConfirmPasswordChangeHandler}
            secureType={true}
          />
          <View style={styles.btnContainer}>
            <NormalButton style={styles.btn} onPress={onSumbmitHandler}>
              update
            </NormalButton>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Setting;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 70,
  },
  container: {
    width: "100%",
  },
  passwordContainer: {
    width: "100%",
    marginTop: 20,
  },
  passwordTitleTxt: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
    textTransform: "uppercase",
    marginBottom: 10,
  },
  btnContainer: {
    width: "50%",
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: 10,
  },
  btn: {
    borderRadius: 10,
    borderColor: colors.pink700,
  },
  errorText: {
    textAlign: "center",
    fontStyle: "italic",
    color: colors.cherryRed,
    fontWeight: "400",
    fontSize: 11,
  },
});
