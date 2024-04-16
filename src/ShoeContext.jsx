import { createContext, useState, useEffect } from "react";

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

  // Functions to add shoes to the context and cart
  const addShoe = (newShoe) => {
    const updatedShoes = [...shoes, newShoe];
    setShoes(updatedShoes);
    localStorage.setItem("savedShoes", JSON.stringify(updatedShoes));
  };

  const addToCart = (shoe) => {
    const updatedCart = [...cart, shoe];
    setCart(updatedCart);
    localStorage.setItem("savedCart", JSON.stringify(updatedCart));
  };

  return (
    <ShoeContext.Provider value={{ shoes, cart, addShoe, addToCart }}>
      {children}
    </ShoeContext.Provider>
  );
};

export default ShoeContextProvider;
