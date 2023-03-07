import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-orange-50">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h4>{cuisines.join(",")}</h4>
      <h4>{lastMileTravelString}</h4>
    </div>
  );
};

export default RestaurantCard;
