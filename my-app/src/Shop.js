import React from "react";
import "./Shop.css";

function Shop() {
  const products = [
    {
      name: "Heirloom tomato",
      price: "$5.99 / lb",
      location: "Grown in San Juan Capistrano, CA",
      image: "/img/tea.jpg",
    },
    {
      name: "Organic ginger",
      price: "$12.99 / lb",
      location: "Grown in Huntington Beach, CA",
      image: "/img/tea.jpg",
    },
    {
      name: "Onion",
      price: "$10.79 / lb",
      location: "Grown in Huntington Beach, CA",
      image: "/img/tea.jpg",
    },
  ];
  return (
    <div className="shop">
      <section className="title-section">
        <h2>Produce</h2>
        <div className="sub-title">
          <span>Fresh</span> — <span>August 21, 2023</span>
        </div>
        <div className="sort-buttons">
          <button className="default">Default</button>
          <button className="sort">A-Z</button>
        </div>
      </section>
      <div className="product-list">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <p className="location">{product.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
