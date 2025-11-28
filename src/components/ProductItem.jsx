import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ strMeal, strMealThumb, idMeal }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={strMealThumb} />
      </div>
      <div className="card-content">
        <span className="card-title">{strMeal}</span>
      </div>
      <div className="card-action">
        <Link to={`/recept/${idMeal}`}>Watch recept</Link>
      </div>
    </div>
  );
};

export default ProductItem;  

