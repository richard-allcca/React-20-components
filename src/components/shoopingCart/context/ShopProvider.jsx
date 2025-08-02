import { useReducer } from "react";
import { TYPES } from "../actions/shopActions";
import { shoppingInitialState, shopReducer } from "../reducers/shopReducer";
import { ShopContext } from "./ShopContext";


export const ShopProvider = ({ children }) => {

  const [state, dispatch] = useReducer(shopReducer, shoppingInitialState);

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  const deleteFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_TO_CART, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_TO_CART, payload: id });
    }
  };

  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };


  const data = {
    state,

    addToCart,
    deleteFromCart,
    clearCart
  };

  return <ShopContext.Provider value={ data } >
    { children }
  </ShopContext.Provider>;
};