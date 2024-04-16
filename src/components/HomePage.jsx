import { useContext, useState } from "react";
import { ShoeContext } from "../ShoeContext";
import { toast, ToastContainer } from "react-toastify";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaPlus, FaMinus } from "react-icons/fa";

const HomePage = () => {
  const { addShoe, shoes } = useContext(ShoeContext);

  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    price: "",
    image: "",
    sizes: {
      Large: 0,
      Medium: 0,
      Small: 0,
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSizeChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      sizes: {
        ...prevData.sizes,
        [name]: parseInt(value),
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.brand || !formData.price) {
      toast.dismiss();
      toast.error("Please fill out all fields.");
      return; // Exit the function without adding shoe
    } else {
      toast.dismiss();
      toast.success("Shoe Added");
    }
    addShoe(formData);
    setFormData({
      name: "",
      brand: "",
      price: "",
      image: "",
      sizes: {
        Large: 0,
        Medium: 0,
        Small: 0,
      },
    });
  };

  return (
    <>
      <div className="formContainer">
        <h2>Admin Section</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <br />
          <label>Brand:</label>
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
          />

          <br />
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />

          <br />
          <label>Image URL:</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />

          <br />
          <label>
            <p className="size_container_label">
              Shoe quantities based on sizes
            </p>
          </label>
          <br />
          <br />
          <div className="sizes">
            <label>Large:</label>
            <input
              type="number"
              name="Large"
              value={formData.sizes.Large}
              onChange={handleSizeChange}
            />
            <label>Medium:</label>
            <input
              type="number"
              name="Medium"
              value={formData.sizes.Medium}
              onChange={handleSizeChange}
            />
            <label>Small:</label>
            <input
              type="number"
              name="Small"
              value={formData.sizes.Small}
              onChange={handleSizeChange}
            />
          </div>

          <br />
          <button type="submit">Add Shoe</button>
        </form>
      </div>
      {/* ________________________________________________________________ */}
      <div className="displaySection">
        <h2>Available Shoes</h2>
        <div className="shoe-container">
          {shoes.map((shoe, index) => (
            <div key={index} className="shoe-card">
              <img src={shoe.image} alt={shoe.name} />
              <h3>{shoe.name}</h3>
              <p className="shoe_brand">Brand: {shoe.brand}</p>
              <p className="shoe_price">
                Price: <span style={{ color: "red" }}>Rs.{shoe.price}</span>
              </p>
              <div className="shoe_size_stock_container">
                <p className="size_stock">
                  Large Size Stock : {shoe.sizes.Large} pairs
                </p>
                <div className="size_buttons">
                  <button className="size_button red">
                    <FaMinus />
                  </button>
                  <button className="size_button green">
                    <FaPlus />
                  </button>
                </div>
              </div>
              <div className="shoe_size_stock_container">
                <p className="size_stock">
                  Medium Size Stock : {shoe.sizes.Medium} pairs
                </p>
                <div className="size_buttons">
                  <button className="size_button red">
                    <FaMinus />
                  </button>
                  <button className="size_button green">
                    <FaPlus />
                  </button>
                </div>
              </div>
              <div className="shoe_size_stock_container">
                <p className="size_stock">
                  Small Size Stock : {shoe.sizes.Small} pairs
                </p>
                <div className="size_buttons">
                  <button className="size_button red">
                    <FaMinus />
                  </button>
                  <button className="size_button green">
                    <FaPlus />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default HomePage;
