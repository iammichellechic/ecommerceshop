import "./App.css";
import React, { Fragment } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Products } from "./Components/Products";
import { Product } from "./Components/Product";
import { Basket } from "./Components/Basket";
import { Home } from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products/*" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<Basket />} />
        </Routes>
      </main>
      <Footer />
    </Fragment>
  );
}
export default App;
