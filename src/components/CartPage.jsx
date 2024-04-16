import React, { useContext } from "react";
import { ShoeContext } from "../ShoeContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantityInCart, clearCart } =
    useContext(ShoeContext);

  const handleRemove = (shoeId, sizeName) => {
    removeFromCart(shoeId, sizeName);
  };

  const handleReduceQuantity = (shoeId, sizeName, quantity) => {
    if (quantity > 1) {
      updateQuantityInCart(shoeId, sizeName, quantity - 1);
    }
  };

  const handleIncreaseQuantity = (shoeId, sizeName, quantity) => {
    updateQuantityInCart(shoeId, sizeName, quantity + 1);
  };

  const handleClearCart = () => {
    clearCart();
  };

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <h2>Your Cart is Empty</h2>
        <br />
        <Link to="/">
          <button
            style={{ background: "green", width: "400px", margin: "2rem auto" }}
          >
            Fill It
          </button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="cart-page">
        <h2>Your Cart</h2>
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>Brand: {item.brand}</p>
                <p>Size: {item.size}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: Rs.{item.price}</p>
                <div className="cartButton">
                  <button
                    onClick={() =>
                      handleReduceQuantity(item.id, item.size, item.quantity)
                    }
                  >
                    Reduce Quantity
                  </button>
                  <button
                    className="cartGreen"
                    onClick={() =>
                      handleIncreaseQuantity(item.id, item.size, item.quantity)
                    }
                  >
                    Increase Quantity
                  </button>
                </div>
                <button
                  className="removeCartBtn"
                  onClick={() => handleRemove(item.id, item.size)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <p>
            Total Shoes:{" "}
            {cart.reduce((total, item) => total + item.quantity, 0)}
          </p>
          <p>
            Total Price: Rs.
            {cart.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            )}
          </p>
        </div>
        <div style={{ display: "flex", gap: "2rem", margin: "1rem auto" }}>
          <Link to="/orderCompletedPage">
            {" "}
            <button style={{ background: "orange" }} onClick={handleClearCart}>
              Proceed To Order
            </button>
          </Link>
          <button className="clearCartBtn" onClick={handleClearCart}>
            Clear Cart
          </button>
        </div>
      </div>
      <Link to="/">
        <div>
          <button className="continue">Continue Shopping</button>
        </div>
      </Link>
    </>
  );
};

export default CartPage;
