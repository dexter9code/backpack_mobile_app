import { FlatList, View } from "react-native";
import { TOURS } from "./../data/Tours";
import Card from "./common/Card";

const Tours = function (props) {
  return (
    <FlatList
      data={TOURS}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <Card
          title={itemData.item.title}
          imageUri={itemData.item.tourImage}
          price={itemData.item.price}
          description={itemData.item.description}
          rating={itemData.item.ratingAverage}
          duration={itemData.item.duration}
        />
      )}
    />
  );
};

export default Tours;
