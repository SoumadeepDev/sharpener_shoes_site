import { createContext, useContext, useReducer } from "react";
const AppContext = createContext();

const intialState = {
  cart: new Map(),
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);
  const { totalAmount, totalCost } = getTotal(state.cart);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE", payload: { id } });
  };

  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: { id } });
  };

  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: { id } });
  };
};
