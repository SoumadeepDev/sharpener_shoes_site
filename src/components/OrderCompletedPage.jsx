import React from "react";
import { Link } from "react-router-dom";

const OrderCompletedPage = () => {
  return (
    <div className="order-completed">
      <h2 className="title">Thank You for Your Order!</h2>
      <p className="message">We appreciate your business.</p>
      <img
        className="image"
        src="https://t3.ftcdn.net/jpg/02/91/52/22/360_F_291522205_XkrmS421FjSGTMRdTrqFZPxDY19VxpmL.jpg"
        alt="Thank you image"
      />
      <Link to="/">
        <button className="button">Continue Shopping</button>
      </Link>
    </div>
  );
};

export default OrderCompletedPage;
