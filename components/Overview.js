import { View, ImageBackground, StyleSheet, Image } from "react-native";
import IconButton from "./common/IconButton";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "./../constants/colors";
import { useNavigation } from "@react-navigation/native";

const Overview = function () {
  const navigation = useNavigation();

  const onLoginPressHandler = (e) => {
    navigation.navigate("login");
  };

  const onSignupPressHandler = (e) => {
    navigation.navigate("signup");
  };

  return (
    <LinearGradient
      colors={["#5ee77b", "#43e79b", "#33e5b5", "#3de2ca", "#58ded8"]}
      style={styles.rootContainer}
    >
      <ImageBackground
        source={require("../assets/img/welcomeCover.jpg")}
        resizeMode="cover"
        style={styles.rootContainer}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.homeContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("../assets/img/backpackLogo.png")}
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
              style={styles.btn}
              onPress={onSignupPressHandler}
            >
              Sign-up
            </IconButton>
          </View>
        </View>
      </ImageBackground>
    </LinearGradient>
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
    width: 400,
    height: 200,
    overflow: "hidden",
    alignSelf: "center",
    marginTop: 80,
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
  },
  btn: {
    flex: 1,
    borderRadius: 20,
    textTransform: "uppercase",
    borderColor: colors.pink500,
  },
  homeContainer: {
    justifyContent: "space-around",
    flex: 1,
    alignItems: "center",
  },
});
