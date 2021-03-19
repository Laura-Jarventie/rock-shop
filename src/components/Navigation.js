import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import ShopContext from "../context/context";

const Navigation = () => {
  const cartItems = useContext(ShopContext);

  return (
    <header className="main-navigation">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart ({cartItems.cartItemCount} )</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
