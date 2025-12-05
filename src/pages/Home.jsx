import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getAllCategories } from "../api";
import Preloader from "../components/Preloader";
import CategoryList from "../components/CategoryList";
import Search from "../components/Search";
import { useLocation, useNavigate } from "react-router-dom";
function Home() {
  const [catalog, setCatalog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredCatalog, setFilteredCatalog] = useState([]);
  const { pathname, search } = useLocation();
  const push = useNavigate();

  const haandelSearch = (str) => {
    setFilteredCatalog(
      catalog.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );
    push({
      pathname,
      search: `?search=${str}`,
    });
  };
  useEffect(() => {
    const searchParam = new URLSearchParams(search).get("search") || "";
    setFilteredCatalog( searchParam 
     ? catalog.filter(cat=>cat.strCategory.toLowerCase().includes(searchParam.toLowerCase())) 
     :catalog)
      }, [search, catalog]);
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

  return (
    <>
      <Search cb={haandelSearch} />
      {loading ? <Preloader /> : <CategoryList catalog={filteredCatalog} />}
    </>
  );
}
export default Home;
