import { useParams } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";
import { getCategorysByName } from "../api";
import ProductList from "../components/ProductList";
import Preloader from "../components/Preloader";

const CategoryPage = () => {
  const { name } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await getCategorysByName(name);
        setProducts(data.meals);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [name]);

  return <>{loading ? <Preloader /> : <ProductList products={products} />}</>;
};

export default CategoryPage;
