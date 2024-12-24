import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Basket.css";

const Basket = () => {
  const [items, setItems] = useState([
    {
      name: "Heirloom tomato",
      price: 5.99,
      weight: "1 lb",
      image: "/img/tomato.jpg",
    },
    {
      name: "Organic ginger",
      price: 6.5,
      weight: "0.5 lb",
      image: "/img/ginger.jpg",
    },
    {
      name: "Sweet onion",
      price: 14.95,
      weight: "5 lb",
      image: "/img/onion.jpg",
    },
  ]);

  useEffect(() => {
    localStorage.setItem("basketItemCount", items.length);
  }, [items]);

  const subtotal = items.reduce((acc, item) => acc + item.price, 0);
  const shipping = 3.99;
  const tax = 2.0;
  const total = subtotal + shipping + tax;

  return (
    <div className="basket-page">
      <div className="basket-header">
        <h2>Basket</h2>
        <p>{items.length} items</p>
      </div>

      <div
        className="basket-container"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div className="basket-items" style={{ flex: 3 }}>
          {items.map((item, index) => (
            <div
              key={index}
              className="basket-item"
              style={{ display: "flex", marginBottom: "10px" }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="item-image"
                style={{ width: "100px", height: "100px", marginRight: "10px" }}
              />
              <div className="item-details">
                <p className="item-name" style={{ fontWeight: "bold" }}>
                  {item.name}
                </p>
                <p className="item-price">${item.price.toFixed(2)}</p>
                <p className="item-weight">{item.weight}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="order-summary"
          style={{
            flex: 1,
            marginLeft: "20px",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
          }}
        >
          <h3>Order summary</h3>
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
          <p>Shipping: ${shipping.toFixed(2)}</p>
          <p>Tax: ${tax.toFixed(2)}</p>
          <p>
            <strong>Total: ${total.toFixed(2)}</strong>
          </p>
          <button
            className="payment-button"
            style={{
              marginTop: "10px",
              padding: "10px",
              backgroundColor: "#4caf50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Continue to payment
          </button>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    const count = localStorage.getItem("basketItemCount");
    if (count) {
      setItemCount(Number(count));
    }
  }, []);

  return (
    <div className="headers">
      <div className="logo-container">
        <h1 className="logo">
          <Link to="/">BloodVita</Link>
        </h1>
      </div>
      <div className="basket-container">
        <Link to="/basket">
          <button className="basket">Basket ({itemCount})</button>
        </Link>
      </div>
    </div>
  );
};

export default Basket;
export { Header };
