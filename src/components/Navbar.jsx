import { FaCartPlus } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <h4>Shoe Store</h4>
        <div className="nav-container">
          <FaCartPlus className="cart-icon" />
          <p>Your Cart</p>
          <div className="amount-container">
            <p className="total-amount">0</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
