import React, { useContext } from "react";
import ShopContext from "../context/context";

const Cart = () => {
  const context = useContext(ShopContext);

  return (
    <>
      <main className="cart">
        {context.cart.length <= 0 && <p>No Item in the Cart!</p>}
        <ul>
          {context.cart.map((cartItem) => (
            <li key={cartItem.id}>
              <div>
                <strong>{cartItem.title}</strong> - ${cartItem.price} (
                {cartItem.quantity} {cartItem.style})
              </div>
              <div>
                <button onClick={() => context.removeProduct(cartItem.id)}>
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
