import React from "react";

const initialState = {
  products: [
    { id: "1", title: "Selenite", desc: "The Master", price: 15.99 },
    { id: "2", title: "Moonstone", desc: "The Stabilizer", price: 10.99 },
  ],
  cart: [],
  keyword: "",
};

export default React.createContext(initialState);
