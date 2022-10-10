import { View, Image, Text, StyleSheet } from "react-native";
import IconButton from "./IconButton";
import NormalButton from "./NormalButton";
import { colors } from "./../../constants/colors";
import { changeUri } from "./../../helper/changeUri";

const GuideCard = function ({ name, role, imageUri }) {
  const guidesImage = changeUri(imageUri);
  return (
    <View style={styles.rootContainer}>
      <View style={styles.guideContainer}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: guidesImage }} style={styles.image} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.nameText}>{role}</Text>
        </View>
      </View>
      <NormalButton textStyle={styles.btnText} style={styles.btn}>
        Contact {name.split(" ")[0]}
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
    textTransform: "capitalize",
  },
  infoContainer: {
    padding: 10,
  },
  btn: {
    paddingVertical: 5,
    paddingHorizontal: 8,
    margin: 2,
    borderColor: colors.greenGrad,
    minWidth: 120,
  },
  btnText: {
    textTransform: "capitalize",
  },
});
