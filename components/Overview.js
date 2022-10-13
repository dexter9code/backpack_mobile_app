import { View, ImageBackground, StyleSheet, Image } from "react-native";
import IconButton from "./common/IconButton";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "./../constants/colors";
import { useNavigation } from "@react-navigation/native";
import Lottie from "lottie-react-native";

const Overview = function () {
  const navigation = useNavigation();

  const onLoginPressHandler = (e) => {
    navigation.navigate("login");
  };

  const onSignupPressHandler = (e) => {
    navigation.navigate("signup");
  };

  return (
    <>
      <LinearGradient
        colors={["#5ee77b", "#43e79b", "#33e5b5", "#3de2ca", "#58ded8"]}
        style={styles.rootContainer}
      >
        <Lottie
          source={require("../assets/animation/65726-traveler.json")}
          autoPlay
        />
        <View style={styles.homeContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("../assets/img/transIcon.png")}
              resizeMode="contain"
            />
          </View>
          <View style={styles.buttonContainer}>
            <IconButton
              iconColor={"#f7f7f7"}
              iconName="login"
              style={styles.btn}
              onPress={onLoginPressHandler}
            >
              Login
            </IconButton>
            <IconButton
              iconColor={"#f7f7f7"}
              iconName="add-user"
              style={styles.btn2}
              onPress={onSignupPressHandler}
            >
              Sign-up
            </IconButton>
          </View>
        </View>
      </LinearGradient>
    </>
  );
};

export default Overview;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  imageStyle: {
    opacity: 0.6,
  },
  imageContainer: {
    width: 200,
    height: 200,
    overflow: "hidden",
    alignSelf: "center",
    marginTop: -80,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    padding: 5,
    marginTop: 80,
  },
  btn: {
    flex: 1,
    borderRadius: 20,
    textTransform: "uppercase",
    borderColor: colors.greenGrad,
    backgroundColor: colors.logoPink,
  },
  btn2: {
    flex: 1,
    borderRadius: 20,
    textTransform: "uppercase",
    borderColor: colors.greenGrad,
    backgroundColor: colors.logoOrange,
  },
  homeContainer: {
    justifyContent: "space-around",
    flex: 1,
    alignItems: "center",
  },
});
