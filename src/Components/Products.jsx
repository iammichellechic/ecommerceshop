import React from "react";
import { ProductItems } from "./ProductItems";
import {fetchProducts} from "../Data/ProductData"

import { useState, useEffect } from "react";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const onSearchChange = (e) => {
    const filtered = products.filter((p) =>
      p.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchProducts();
      setProducts(result);
      setFilteredProducts(result);
    };
    fetchData();
  }, []);

  return (
    <div>
      <section>
        <div class="wrap">
          <div class="search">
            <input
              type="text"
              class="searchTerm"
              placeholder="Hitta en produkt"
              onChange={onSearchChange}
            />
          </div>
        </div>
      </section>
      <section className="products" id="products">
        <h1 className="heading">
          {" "}
          <span>our</span> products{" "}
        </h1>

        <div className="productgallery">
          {filteredProducts.map((product) => (
            <ProductItems key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};
