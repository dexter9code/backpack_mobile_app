import { View, StyleSheet, Text, Platform, StatusBar } from "react-native";
import LottieView from "lottie-react-native";
import { colors } from "./../../constants/colors";

const Error404 = function () {
  return (
    <View style={styles.rootContainer}>
      <LottieView
        autoPlay
        source={require("../../assets/animation/404.json")}
      />
      <Text style={styles.text}>
        server are down please comeback after some time
      </Text>
    </View>
  );
};

export default Error404;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "600",
    color: colors.cherryRed,
    position: "absolute",
    top: Platform.OS === "android" ? 150 : 180,
    textTransform: "capitalize",
  },
});
