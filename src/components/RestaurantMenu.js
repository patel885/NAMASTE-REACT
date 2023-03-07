import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItems } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurant = useRestaurant(id);
  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(addItems(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div>
        <h1>Restraunt id: {id}</h1>
        <h2>{restaurant?.name}</h2>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating} stars</h3>
        <h3>{restaurant?.costForTwoMsg}</h3>
      </div>
      <div className="p-5 m-5">
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>
              {item.name}{" "}
              <button
                className="p-2 m-2 bg-green-600"
                onClick={() => handleClick(item)}
              >
                Add
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
