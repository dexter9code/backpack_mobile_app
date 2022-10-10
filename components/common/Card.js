import {
  Image,
  Pressable,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import AppText from "./AppText";
import { colors } from "./../../constants/colors";
import { useNavigation } from "@react-navigation/native";

const Card = function ({
  title,
  imageUri,
  price,
  description,
  rating,
  duration,
  id,
}) {
  const navigation = useNavigation();

  const onPressHandler = (e) => {
    navigation.navigate("tour", { tourId: id });
  };

  const upadatedUri = imageUri.replace(/localhost:8080/gi, `192.168.1.38:8080`);

  return (
    <SafeAreaView style={styles.rootContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.rootContainer,
          pressed && styles.clicked,
        ]}
        onPress={onPressHandler}
      >
        <ScrollView>
          <View style={styles.card}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.overlayImage}
                source={{ uri: upadatedUri }}
              />
            </View>
            <View style={styles.detailsContainer}>
              <View style={styles.iconContainer}>
                <View style={styles.iconImageContainer}>
                  <Image
                    source={require("../../assets/icons/google-maps.png")}
                    style={styles.iconImage}
                  />
                </View>
                <AppText style={styles.title}>{title}</AppText>
              </View>
              <AppText style={styles.subTitle}>₹ {price}</AppText>
            </View>
            <View style={styles.ratingContainer}>
              <View style={styles.iconContainer2}>
                <View style={styles.iconImageContainer2}>
                  <Image
                    source={require("../../assets/icons/chat.png")}
                    style={styles.iconImage2}
                  />
                </View>
                <AppText style={styles.ratingText}>{rating}/5.0</AppText>
              </View>
              <View style={styles.iconContainer}>
                <View style={styles.iconImageContainer}>
                  <Image
                    source={require("../../assets/icons/wall-clock.png")}
                    style={styles.iconImage}
                  />
                </View>
                <AppText style={styles.daysText}>{duration} days</AppText>
              </View>
            </View>
            <View style={styles.subContainer}>
              <AppText style={styles.descriptionText}>{description}</AppText>
            </View>
          </View>
        </ScrollView>
      </Pressable>
    </SafeAreaView>
  );
};

export default Card;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  card: {
    borderRadius: 18,
    backgroundColor: colors.white600,
    marginVertical: 10,
    marginHorizontal: 5,
    overflow: "hidden",
    elevation: 3,
  },
  imageContainer: {
    width: "100%",
    height: 250,
    overflow: "hidden",
  },
  overlayImage: {
    width: "100%",
    height: "100%",
  },
  detailsContainer: {
    paddingVertical: 20,
    paddingLeft: 4,
    paddingRight: 14,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  subTitle: {
    color: colors.dodgerBlue500,
    fontWeight: "bold",
  },
  title: {
    fontWeight: "bold",
  },
  subContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    backgroundColor: colors.cream500,
  },
  descriptionText: {
    fontSize: 10,
    textTransform: "capitalize",
    textAlign: "center",
    color: "#000",
  },
  clicked: {
    opacity: 0.9,
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingBottom: 2,
    marginBottom: 12,
    paddingLeft: 8,
    paddingRight: 16,
  },
  ratingText: {
    fontSize: 12,
  },
  daysText: {
    fontSize: 12,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconImageContainer: {
    width: 20,
    height: 20,
    overflow: "hidden",
    marginRight: 5,
  },
  iconImage: {
    width: "100%",
    height: "100%",
  },
  iconContainer2: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconImageContainer2: {
    width: 22,
    height: 22,
    overflow: "hidden",
    marginRight: 5,
  },
  iconImage2: {
    width: "100%",
    height: "100%",
  },
});
