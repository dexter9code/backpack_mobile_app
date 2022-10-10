import { useState, useEffect } from "react";
import Tour from "../components/Tour";
import { getSingleTour } from "../helper/tour-http";

const TourScreen = function ({ route }) {
  const id = route.params.tourId;

  const [tour, setTour] = useState();

  const fectchTour = async () => {
    const data = await getSingleTour(id);
    setTour(data.data.tour);
  };

  useEffect(() => {
    fectchTour();
  }, []);

  return <Tour tourData={tour} />;
};

export default TourScreen;
