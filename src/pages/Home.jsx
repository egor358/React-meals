import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getAllCategories } from "../api";
import Preloader from "../components/Preloader";
import CategoryList from "../components/categoryList";
function Home() {
  const [catalog, setCatalog] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await getAllCategories();
        setCatalog(data.categories);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return <>{loading ? <Preloader /> : <CategoryList catalog={catalog} />}</>;
}
export default Home;
