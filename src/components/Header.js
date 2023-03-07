import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useContext } from "react";
import { useSelector } from "react-redux";
import UserContext from "../utils/UserContext";

const Title = () => {
  return (
    <a href="/">
      <img
        className="w-20 m-2"
        src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
        alt="logo"
      />
    </a>
  );
};

const Header = () => {
  const isOnline = useOnline();

  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);

  return (
    <div className="flex justify-between bg-orange-400">
      <Title />
      <div className="flex">
        <ul className="flex py-10">
          <Link to="/">
            <li className="px-2">Home</li>
          </Link>

          <Link to="/about">
            <li className="px-2">About</li>
          </Link>
          <Link to="/contact">
            <li className="px-2">Contact</li>
          </Link>
          <Link to="/instamart">
            <li className="px-2">Instamart</li>
          </Link>
          <Link to="/cart">
            <li className="px-4">Cart- {cartItems.length} items</li>
          </Link>
        </ul>
        <h4 className="flex py-10 mr-2">
          {isOnline ? "🟩" : "🟥"} {user.name}
        </h4>
      </div>
    </div>
  );
};

export default Header;
