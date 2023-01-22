import { useState, useEffect } from "react";
import { RESTAURANT_URL } from "../config";

const useRestaurant = (id) => {
  const [restaurants, setRestaurants] = useState(null);

  useEffect(() => {
    getRestaurantDetails();
  }, []);

  async function getRestaurantDetails() {
    const data = await fetch(RESTAURANT_URL + id);

    const result = await data.json();
    setRestaurants(result.data);
  }
  return restaurants;
};

export default useRestaurant;
