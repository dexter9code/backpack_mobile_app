import { LinearGradient } from "expo-linear-gradient";
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

const Signup = function () {
  const nameChangeHandler = (e) => {};

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
              source={require("../assets/img/backpack-logo-trans.png")}
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

        <IconInput
          iconName={`account`}
          onChange={nameChangeHandler}
          placeHolder={`Username`}
          style={styles.input}
        />
        <IconInput
          iconName={`email`}
          onChange={nameChangeHandler}
          placeHolder={`@example.com`}
          style={styles.input}
        />
        <IconInput
          iconName={`lock`}
          onChange={nameChangeHandler}
          placeHolder={`Password`}
          style={styles.input}
        />
        <IconInput
          iconName={`lock`}
          onChange={nameChangeHandler}
          placeHolder={`Confrim Password`}
          style={styles.input}
        />
        <IconButton style={styles.button}>Sign-up</IconButton>
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
    borderColor: colors.dodgerBlue500,
    backgroundColor: colors.dodgerBlue700,
    borderRadius: 22,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 30,
  },
  imageContainer: {
    width: 80,
    height: 80,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    marginLeft: 6,
    paddingTop: 15,
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
});
