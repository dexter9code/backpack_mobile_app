import {
  View,
  StyleSheet,
  Text,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";
import { useState } from "react";
import AppText from "./common/AppText";
import GuideCard from "./common/GuideCard";
import Slider from "./common/Slider";
import { colors } from "./../constants/colors";
import ToursFeatures from "./common/TourFeatures";
import IconButton from "./common/IconButton";
import FavButton from "./common/FavButton";

const Tour = function (props) {
  const [liked, setLiked] = useState(false);

  const onLikedPressHandler = (e) => {
    setLiked((prevState) => !prevState);
  };

  return (
    <View style={styles.rootContainer}>
      <ScrollView>
        <Slider />
        <View style={styles.floatContainer}>
          <Text style={styles.floatText}>
            $ 455 {"\n"} <Text style={styles.floatSubText}>per Person</Text>
          </Text>
        </View>
        <View style={styles.locationContainer}>
          <AppText style={styles.locationText}>Kathmandu,India</AppText>
          <AppText style={styles.ratingText}>4.5/5</AppText>
        </View>
        <Text style={styles.guideText}>Your Guides</Text>

        <GuideCard />
        <GuideCard />
        <View style={styles.summaryContaienr}>
          <Text style={styles.guideText}>About Kathmandu</Text>
          <Text style={styles.sumamryText}>
            Kathmandu, Nepal's capital, is set in a valley surrounded by the
            Himalayan mountains. At the heart of the old city’s mazelike alleys
            is Durbar Square, which becomes frenetic during Indra Jatra, a
            religious festival featuring masked dances. Many of the city's
            historic sites were damaged or destroyed by a 2015 earthquake.
            Durbar Square's palace, Hanuman Dhoka, and Kasthamandap, a wooden
            Hindu temple, are being rebuilt.{" "}
          </Text>
        </View>
        <Text style={styles.guideText}>Tour Features</Text>
        <View style={styles.featuresContainer}>
          <ToursFeatures />
        </View>
        <View style={styles.buttonContainers}>
          <IconButton
            iconName={"shopping-bag"}
            iconColor={colors.dodgerBlue500}
            style={styles.btnBuy}
          >
            Buy-Now
          </IconButton>
          <FavButton
            liked={liked}
            onPress={onLikedPressHandler}
            style={styles.btnLike}
            iconColor={colors.white600}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Tour;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  floatContainer: {
    position: "absolute",
    top: 270,
    right: 20,
    borderWidth: 1,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    backgroundColor: colors.pink500,
    borderColor: colors.greenGrad,
  },
  floatText: {
    textAlign: "center",
    fontWeight: "bold",
    color: colors.white600,
  },
  floatSubText: {
    textAlign: "center",
    textTransform: "capitalize",
    fontSize: 10,
  },
  locationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginTop: 15,
  },
  locationText: {
    fontSize: 15,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  ratingText: {
    fontSize: 12,
  },
  guideText: {
    paddingHorizontal: 10,
    textTransform: "uppercase",
    textAlign: "center",
    fontWeight: "bold",
  },
  summaryContaienr: {
    padding: 10,
  },
  sumamryText: {
    textAlign: "center",
    fontSize: 10,
    padding: 8,
  },
  featuresContainer: {
    marginVertical: 22,
    marginHorizontal: 5,
  },
  buttonContainers: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 15,
    marginVertical: 15,
  },
  btnBuy: {
    borderColor: colors.greenGrad,
    width: "80%",
  },
  btnLike: {
    borderColor: colors.greenGrad,
    width: "20%",
  },
});
