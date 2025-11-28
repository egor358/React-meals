import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import Recept from "./pages/Recept";


function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/category/:name" element={<CategoryPage />}></Route>
            <Route path="/recept/:id" element={<Recept/>}></Route>
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
