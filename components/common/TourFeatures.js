import { StyleSheet, Text, View, Image } from "react-native";

const ToursFeatures = function (props) {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.iconsContainer1}>
        <View>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/icons/airplane.png")}
              style={styles.image}
            />
          </View>
          <Text style={styles.text}>Best Class Travel</Text>
        </View>
        <View>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/icons/breakfast.png")}
              style={styles.image}
            />
          </View>
          <Text style={styles.text}> Food service</Text>
        </View>
        <View>
          <View style={[styles.imageContainer, styles.extraImage]}>
            <Image
              source={require("../../assets/icons/seven-stars.png")}
              style={styles.image}
            />
          </View>
          <Text style={styles.text}>World class hotels</Text>
        </View>
      </View>
      <View style={styles.iconsContainer2}>
        <View>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/icons/wallet.png")}
              style={styles.image}
            />
          </View>
          <Text style={styles.text}>Affortable prices</Text>
        </View>
        <View>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/icons/customer.png")}
              style={[styles.image, styles.extraImage]}
            />
          </View>
          <Text style={styles.text}>100% statification</Text>
        </View>
      </View>
    </View>
  );
};

export default ToursFeatures;

const styles = StyleSheet.create({
  rootContainer: {
    padding: 5,
  },
  iconsContainer1: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  iconsContainer2: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginVertical: 10,
  },
  text: {
    textAlign: "center",
    textTransform: "capitalize",
    fontSize: 8,
    fontWeight: "600",
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  extraImage: {
    marginLeft: 15,
  },
});
