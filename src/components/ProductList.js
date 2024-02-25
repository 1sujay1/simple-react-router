// ProductList.js
import React from "react";
import ProductItem from "./ProductItem";

const ProductList = () => {
  // Fetch products from API or use dummy data
  const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
  ];

  return (
    <div className="container">
      <h2 className="mt-4 mb-3">Products</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-lg-4 col-md-6 mb-4">
            <ProductItem product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
