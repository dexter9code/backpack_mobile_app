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

const Card = function ({
  title,
  imageUri,
  price,
  description,
  rating,
  duration,
}) {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.rootContainer,
          pressed && styles.clicked,
        ]}
      >
        <ScrollView>
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={require("../../data/tour-2-1.jpg")}
            />
            <View style={styles.detailsContainer}>
              <AppText style={styles.title}>{title}</AppText>
              <AppText style={styles.subTitle}>₹ {price}</AppText>
            </View>
            <View style={styles.ratingContainer}>
              <AppText style={styles.ratingText}>{rating}/5</AppText>
              <AppText style={styles.daysText}>{duration} days</AppText>
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
    backgroundColor: colors.dodgerBlue500,
    marginVertical: 20,
    marginHorizontal: 5,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.pink700,
    fontWeight: "bold",
  },
  title: {
    fontWeight: "bold",
  },
  subContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  descriptionText: {
    fontSize: 10,
    textTransform: "capitalize",
    textAlign: "center",
    color: colors.gray700,
  },
  clicked: {
    opacity: 0.9,
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 5,
  },
  ratingText: {
    fontSize: 12,
  },
  daysText: {
    fontSize: 12,
  },
});
