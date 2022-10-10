import { View, Dimensions, StyleSheet, Image } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";

const { width } = Dimensions.get("window");

const Slider = function ({ images }) {
  return (
    <View>
      <SwiperFlatList
        autoplay
        autoplayLoop
        data={images}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={{ uri: item }} style={styles.image} />
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
