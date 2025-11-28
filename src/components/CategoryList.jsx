import React from "react";

import CategoryItem from "./CategoryItem";

function CategoryList({ catalog }) {
  if (!catalog.length) {
    return <h1>Catalog is missing</h1>;
  }
  return (
    <div className="list">
      {catalog.map((cat) => (
        <CategoryItem key={cat.idCategory} {...cat} />
      ))}
    </div>
  );
}

export default CategoryList;
