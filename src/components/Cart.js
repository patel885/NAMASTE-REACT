import { useSelector, useDispatch } from "react-redux";

import CartItems from "./CartItems";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const emptyCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <div>
        <button
          className="bg-red-500 p-2 m-2 float-right"
          onClick={() => emptyCart()}
        >
          Clear Cart
        </button>
      </div>
      <h1>Cart Items - {cartItems.length}</h1>
      <div className="flex">
        {cartItems.map((item) => (
          <CartItems key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
