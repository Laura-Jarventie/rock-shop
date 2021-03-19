import React, { useContext, useReducer } from "react";
import ShopContext from "./context";
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from "./reducers";

const GlobalState = (props) => {
  const shop = useContext(ShopContext);
  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

  const addProduct = (product) => {
    console.log("add" + product);
    dispatch({
      type: ADD_PRODUCT,
      product: product,
    });
  };

  const removeProduct = (productId) => {
    console.log("remove" + productId);
    dispatch({
      type: REMOVE_PRODUCT,
      productId: productId,
    });
  };

  return (
    <ShopContext.Provider
      value={{
        products: shop.products,
        cart: cartState.cart,
        addProduct: addProduct,
        removeProduct: removeProduct,
        cartItemCount: cartState.cart.reduce((count, curItem) => {
          return count + curItem.quantity;
        }, 0),
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default GlobalState;
