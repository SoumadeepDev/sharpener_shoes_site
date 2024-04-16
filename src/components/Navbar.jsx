import React, { useState, useEffect, useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ShoeContext } from "../ShoeContext";

const Navbar = () => {
  const { cart } = useContext(ShoeContext);
  const [isBumped, setIsBumped] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    // Calculate the total quantity whenever cart changes
    const newTotalQuantity = cart.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setTotalQuantity(newTotalQuantity);
  }, [cart]);

  const handleClick = () => {
    setIsBumped(true);
    setTimeout(() => {
      setIsBumped(false);
    }, 300);
  };

  return (
    <nav>
      <div className="nav-center">
        <Link to="/">
          <h4>Shoe Store</h4>
        </Link>
        <Link to="/cartPage">
          <div
            className={`nav-container ${isBumped ? "bump-animation" : ""}`}
            onClick={handleClick}
          >
            <FaCartPlus className="cart-icon" />
            <p>Your Cart</p>
            <div className="amount-container">
              <p className="total-amount">{totalQuantity}</p>
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
