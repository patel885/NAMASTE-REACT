import { useState } from "react";

import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../config";

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState();

  function filterData(searchText, restaurants) {
    const filteredData = restaurants.filter(
      (restaurant) =>
        restaurant.data.name?.toLowerCase() === searchText?.toLowerCase()
    );
    setRestaurants(filteredData);
  }

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          type="submit"
          onClick={() => {
            filterData(searchText, restaurants);
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
