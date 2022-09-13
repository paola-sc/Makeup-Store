/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Product } from "../components/Product";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../index.css";

export const ProductList = () => {
  let { parameter } = useParams();

  let [products, setProducts] = useState([]);

  async function fetchProducts() {
    let response = await axios(
      `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${parameter}`
    );
    let results = await response.data;
    setProducts(results);
  }

  useEffect(() => {
    fetchProducts();
  }, [parameter]);

  return (
    <div className="m-4 mb-5 black text-center">
      <h1>
        {parameter === "lipstick"
          ? "Lipsticks"
          : parameter === "lip_liner"
          ? "Lip liners"
          : parameter === "eyeshadow"
          ? "Eyeshadows"
          : parameter === "eyeliner"
          ? "Eyeliners"
          : parameter === "mascara"
          ? "Mascaras"
          : parameter === "eyebrow"
          ? "Eyebrow products"
          : parameter === "blush"
          ? "Blushs"
          : parameter === "bronzer"
          ? "Bronzers"
          : parameter === "foundation"
          ? "Foundations"
          : parameter === "nail_polish"
          ? "Nail polishes"
          : "Products"}
      </h1>
      <div className="flex d-inline-flex flex-wrap justify-content-center">
        {products.map((product, i) => {
          return (
            <Product
              key={i}
              image={product.api_featured_image}
              name={product.name}
              id={product.id}
            />
          );
        })}
      </div>
    </div>
  );
};
