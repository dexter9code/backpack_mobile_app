import { View, StyleSheet, Image, Text } from "react-native";
import IconButton from "./common/IconButton";
import IconInput from "./common/IconInput";
import { colors } from "./../constants/colors";
import { useDispatch, useSelector } from "react-redux";

const Login = function ({
  emailHandler,
  passwordHandler,
  submitHandler,
  inputValid,
}) {
  const error = useSelector((state) => state.Error.error);
  console.log(error);
  return (
    <View style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/img/backpack-logo-trans.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.titleText}>Welcome Back </Text>

      {inputValid && inputValid.status === `error` && (
        <Text style={styles.errorMessage}>{inputValid.message}</Text>
      )}

      <IconInput
        iconName={"email"}
        placeHolder={`@example.com`}
        onChange={emailHandler}
        style={styles.extra}
        inputValid={inputValid}
      />
      <IconInput
        iconName={"lock"}
        placeHolder={`Password`}
        EntryType={true}
        onChange={passwordHandler}
        style={styles.extra}
        inputValid={inputValid}
      />
      <IconButton style={styles.btn} onPress={submitHandler}>
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
});
