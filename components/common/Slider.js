import { View, Dimensions, StyleSheet, Image, Text } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import image1 from "../../data/tour-1-1.jpg";
import image2 from "../../data/tour-2-1.jpg";
import image3 from "../../data/tour-6-cover.jpg";

const { width } = Dimensions.get("window");

const images = ["tomato", "carrot", `telsa`];

const Slider = function () {
  return (
    <View>
      <SwiperFlatList
        autoplay
        autoplayLoop
        data={images}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            {/* <Image source={{ uri: item.toString() }} style={styles.image} /> */}
            <Text>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  imageContainer: {
    width,
    justifyContent: "center",
    height: 300,
    backgroundColor: "dodgerblue",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
