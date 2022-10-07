import { View, Image, Text, StyleSheet } from "react-native";
import IconButton from "./IconButton";
import NormalButton from "./NormalButton";
import { colors } from "./../../constants/colors";

const GuideCard = function ({ name, role, imageUri }) {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.guideContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/monica.jpg")}
            style={styles.image}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.nameText}>Monica</Text>
          <Text style={styles.nameText}>Lead-Guide</Text>
        </View>
      </View>
      <NormalButton textStyle={styles.btnText} style={styles.btn}>
        Contact Monica
      </NormalButton>
    </View>
  );
};

export default GuideCard;

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
  guideContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  nameText: {
    fontSize: 12,
    fontWeight: "bold",
  },
  infoContainer: {
    padding: 10,
  },
  btn: {
    paddingVertical: 5,
    paddingHorizontal: 8,
    margin: 2,
    borderColor: colors.greenGrad,
  },
  btnText: {
    textTransform: "capitalize",
  },
});
