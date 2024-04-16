import React, { createContext, useState, useEffect } from "react";
import { nanoid } from "nanoid";

export const ShoeContext = createContext();

const ShoeContextProvider = ({ children }) => {
  const [shoes, setShoes] = useState([]);
  const [cart, setCart] = useState([]);

  // Load data from local storage on component mount
  useEffect(() => {
    const savedShoes = localStorage.getItem("savedShoes");
    const savedCart = localStorage.getItem("savedCart");
    if (savedShoes) {
      setShoes(JSON.parse(savedShoes));
    }
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const addShoe = (newShoe) => {
    const updatedShoes = [...shoes, { ...newShoe, id: nanoid() }];
    setShoes(updatedShoes);
    localStorage.setItem("savedShoes", JSON.stringify(updatedShoes));
  };

  const removeShoe = (shoeId, sizeName) => {
    const updatedShoes = shoes.filter(
      (shoe) => shoe.id !== shoeId || shoe.size !== sizeName
    );
    setShoes(updatedShoes);
    localStorage.setItem("savedShoes", JSON.stringify(updatedShoes));
  };

  const addToCart = (shoe) => {
    const existingItemIndex = cart.findIndex(
      (item) => item.id === shoe.id && item.size === shoe.size
    );

    if (existingItemIndex !== -1) {
      // Item already exists in cart, update its quantity
      const updatedCart = cart.map((item, index) =>
        index === existingItemIndex
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
      localStorage.setItem("savedCart", JSON.stringify(updatedCart));
    } else {
      // Item does not exist in cart, add it with quantity 1
      const updatedCart = [...cart, { ...shoe, quantity: 1 }];
      setCart(updatedCart);
      localStorage.setItem("savedCart", JSON.stringify(updatedCart));
    }
  };
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("savedCart");
  };

  const removeFromCart = (shoeId, sizeName) => {
    const updatedCart = cart.filter(
      (item) => item.id !== shoeId || item.size !== sizeName
    );
    setCart(updatedCart);
    localStorage.setItem("savedCart", JSON.stringify(updatedCart));
  };

  const updateQuantityInCart = (shoeId, sizeName, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.id === shoeId && item.size === sizeName
        ? { ...item, quantity: newQuantity }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("savedCart", JSON.stringify(updatedCart));
  };

  return (
    <ShoeContext.Provider
      value={{
        shoes,
        cart,
        addShoe,
        removeShoe,
        addToCart,
        removeFromCart,
        updateQuantityInCart,
        clearCart,
      }}
    >
      {children}
    </ShoeContext.Provider>
  );
};

export default ShoeContextProvider;
