import { View, ImageBackground, StyleSheet, Image } from "react-native";
import IconButton from "./common/IconButton";

const Overview = function () {
  return (
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
          <IconButton iconColor={"#f7f7f7"} iconName="login" style={styles.btn}>
            Login
          </IconButton>
          <IconButton
            iconColor={"#f7f7f7"}
            iconName="add-user"
            style={styles.btn}
          >
            Sign-up
          </IconButton>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Overview;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  imageStyle: {
    opacity: 0.7,
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
  },
  btn: {
    flex: 1,
  },
  homeContainer: {
    justifyContent: "space-around",
    flex: 1,
    alignItems: "center",
  },
});
