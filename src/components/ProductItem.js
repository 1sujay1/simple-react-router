// ProductItem.js
import React from "react";

const ProductItem = ({ product }) => {
  return (
    <div className="card h-100 product-card">
      <img
        src="https://via.placeholder.com/300"
        className="card-img-top"
        alt="Product"
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">Price: ${product.price}</p>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
