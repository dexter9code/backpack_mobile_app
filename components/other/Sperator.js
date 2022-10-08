import { StyleSheet, View } from "react-native";
import { colors } from "./../../constants/colors";

function Sperator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.gray700,
  },
});

export default Sperator;
