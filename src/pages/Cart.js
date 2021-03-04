import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeProduct } from "../store/actions";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      <main className="cart">
        {cartItems.length <= 0 && <p>No Item in the Cart!</p>}
        <ul>
          {cartItems.map((cartItem) => (
            <li key={cartItem.id}>
              <div>
                <strong>{cartItem.title}</strong> - ${cartItem.price} (
                {cartItem.quantity} {cartItem.style})
              </div>
              <div>
                <button onClick={() => dispatch(removeProduct(cartItem.id))}>
                  Remove from Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Cart;
