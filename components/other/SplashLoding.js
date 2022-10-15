import { Image, StyleSheet, View } from "react-native";
import { colors } from "./../../constants/colors";

const SplashLoading = function () {
  return (
    <View style={styles.rootContainer}>
      <Image style={styles.image} source={require("../../assets/splash.png")} />
    </View>
  );
};

export default SplashLoading;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: colors.logoOrange,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
