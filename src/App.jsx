import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import CartPage from "./components/CartPage";
import ShoeContextProvider from "./ShoeContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OrderCompletedPage from "./components/OrderCompletedPage";

function App() {
  return (
    <Router>
      <ShoeContextProvider>
        <ToastContainer position="top-center" pauseOnHover autoClose={1500} />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/cartPage" element={<CartPage />} />
          <Route path="/orderCompletedPage" element={<OrderCompletedPage />} />
        </Routes>
      </ShoeContextProvider>
    </Router>
  );
}

export default App;
