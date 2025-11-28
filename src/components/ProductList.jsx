import React from "react";

import ProductItem  from "./ProductItem";

function ProductList({ products }) {
  if (!products.length) {
    return <h1>Products is missing</h1>;
  }
  return (
    <div className="list">
      {products.map((product) => (
        <ProductItem key={product.idMeal} {...product} />
      ))}
    </div>
  );
}

export default ProductList;
