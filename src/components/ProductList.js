/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Product } from "../components/Product";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../index.css";

export const ProductList = () => {
  /* Fetching products based on their type (passed as parameter) */
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

  /* Filtering products based on the input from search bar */
  let [searchTerm, setSearchTerm] = useState("")

  const handleChange = (e) => {
    let term = e.target.value
    setSearchTerm(term)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    let searchList = products.filter((item) => {
      return item.name.toLowerCase().includes(searchTerm.toLowerCase())
    })

    setProducts(searchList)
  }

  /* Filtering products with price of 0.00 */
  let filteredList = products.filter(product => product.price !== "0.0")

  return (
    <div className="col-11 my-5 text-center mx-auto" style={{ minHeight: "65vh" }}>
      { /* Conditional rendering of title */}
      <h1 className="fw-bold mb-0 mb-md-5">
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
                      ? "Blushes"
                      : parameter === "bronzer"
                        ? "Bronzers"
                        : parameter === "foundation"
                          ? "Foundations"
                          : parameter === "nail_polish"
                            ? "Nail polishes"
                            : "Products"}
      </h1>

      { /* Search Bar */}
      <form className="d-flex mx-auto col-10 col-md-9 my-4" role="search" onSubmit={handleSubmit}>
        <input onChange={handleChange} autoComplete="off" className="form-control me-2" type="search" placeholder="Search by name" aria-label="Search" />
        <button className="btn btn-dark" type="submit">Search</button>
      </form>

      { /* Grid of all products from a certain type */}
      <div className="flex d-inline-flex flex-wrap justify-content-center">
        {filteredList?.map((product, i) => {
          return (
            <Product
              key={i}
              image={product.api_featured_image}
              name={product.name}
              id={product.id}
              type={product.product_type}
            />
          );
        })}
      </div>
    </div>
  );
};
