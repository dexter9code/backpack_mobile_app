import { useNetInfo } from "@react-native-community/netinfo";
import { Text, View, StyleSheet, Platform, StatusBar } from "react-native";
import { colors } from "./../constants/colors";

const Offline = function (props) {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>no internet connection</Text>
      </View>
    );
  }
  return null;
};

export default Offline;

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: "center",
    backgroundColor: colors.cherryRed,
    height: 50,
    justifyContent: "center",
    position: "absolute",
    top: Platform.OS === "android" ? 1 : 5,
    width: "100%",
    zIndex: 1,
  },
  text: {
    color: colors.white500,
    textTransform: "capitalize",
    fontWeight: "600",
  },
});
