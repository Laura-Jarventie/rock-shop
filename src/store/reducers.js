import { ADD_PRODUCT, REMOVE_PRODUCT, SEARCH_PRODUCT } from "./actions";

const initialState = {
  products: [
    { id: "1", title: "Selenite", desc: "The Master", price: 15.99 },
    { id: "2", title: "Moonstone", desc: "The Stabilizer", price: 10.99 },
    {
      id: "3",
      title: "Aventurine",
      desc: "The Stone of Opportunity",
      price: 14.99,
    },
    {
      id: "4",
      title: "Crystal Quartz",
      desc: "The Spirit Stone",
      price: 12.99,
    },
    { id: "5", title: "Citrine", desc: "The Money Stone", price: 10.99 },
    { id: "6", title: "Agate", desc: "Stone of Inner Stability", price: 7.99 },
    { id: "7", title: "Tourmaline", desc: "The Grounding Stone", price: 9.99 },
    { id: "8", title: "Rose Quartz", desc: "The Love Stone", price: 5.99 },
    {
      id: "9",
      title: "Turquoise",
      desc: "The Stone of Protection",
      price: 8.99,
    },
    {
      id: "10",
      title: "Fluorite",
      desc: "The Stone of Positivity",
      price: 6.99,
    },
  ],
  cart: [],
  keyword: "",
};

const shopReducer = (state = initialState, action) => {
  let updatedCart;
  let updatedItemIndex;
  switch (action.type) {
    case SEARCH_PRODUCT:
      const keyword = action.payload;
      return { ...state, keyword: keyword };

    case ADD_PRODUCT:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (updatedItemIndex < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 });
      } else {
        const updatedItem = {
          ...updatedCart[updatedItemIndex],
        };
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
      }
      return { ...state, cart: updatedCart };

    case REMOVE_PRODUCT:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload
      );

      const updatedItem = {
        ...updatedCart[updatedItemIndex],
      };
      updatedItem.quantity--;
      if (updatedItem.quantity <= 0) {
        updatedCart.splice(updatedItemIndex, 1);
      } else {
        updatedCart[updatedItemIndex] = updatedItem;
      }

      return { ...state, cart: updatedCart };
    default:
      return state;
  }
};

export default shopReducer;
