import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { getAllTours } from "../helper/tour-http";
import Card from "./common/Card";

const Tours = function (props) {
  const [tours, setTours] = useState();

  const fetchTours = async () => {
    const data = await getAllTours();
    setTours(data.data.tours);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <FlatList
      data={tours}
      keyExtractor={(item) => item._id}
      renderItem={(itemData) => (
        <Card
          id={itemData.item._id}
          title={itemData?.item.title}
          imageUri={itemData.item.tourImage}
          price={itemData.item.price}
          description={itemData.item.summary}
          rating={itemData.item.ratingAverage}
          duration={itemData.item.duration}
        />
      )}
    />
  );
};

export default Tours;
