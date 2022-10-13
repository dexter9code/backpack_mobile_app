import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

const Loading = function () {
  return (
    <View style={styles.rootContainer}>
      <LottieView
        autoPlay
        source={require("../assets/animation/loading.json")}
      />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
