/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";
import axios from "axios";
import "../index.css";

export const ProductDetails = () => {
  /* AddToCart Function */
  const { onAdd } = useContext(CartContext);

  /* Fetching product based on its id */
  let { id } = useParams();
  let [product, setProduct] = useState([]);

  async function fetchProduct() {
    let response = await axios(
      `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`
    );
    let results = await response.data;
    setProduct(results);
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  /* Capitalization function */
  const capitalizeFirst = (str) => {
    return str?.charAt(0).toUpperCase() + str?.slice(1);
  };

  /* This generates the list of tags */
  const TagsList = () => {
    const tags = product.tag_list;

    return (
      <ul style={{ listStyleType: "none"}} className="p-0 m-0 fs-6">
        {tags?.map((tag, i) => (
          <li
            key={i}
            style={{ display: "inline-block" }}
            className="mb-2 me-2 px-2 py-1 lightPink rounded"
          >
            {tag}
          </li>
        ))}
      </ul>
    );
  };

  /* This generates the description */
  const Description = () => {
    return (
      <div dangerouslySetInnerHTML={DescriptionRendering()} className="mt-2 mb-4" />
    )
  }

  /* This is needed because descriptions come with html tags inside them */
  const DescriptionRendering = () => {
    return { __html: product.description };
  };

  return (
    <div className="col-11 black mx-auto my-3 mb-5 d-flex flex-column" style={{ minHeight: "60vh" }}>
      {/* Top Controls -------------------------------- */}
      <div
        className="d-flex d-inline-flex justify-content-between mt-2 mb-4 mt-md-3 mb-md-5"
        style={{ width: "100%" }}
      >
        { /* Navigation button to home */}
        <div className="col">
          <Link to={`/products/${product.product_type}`}>
            <i className="fa-solid fa-arrow-left fs-1 black" />
          </Link>
        </div>

        { /* Details Title */}
        <div className="col-10 text-center">
          <h1 className="m-0 fw-bold">Details</h1>
        </div>

        { /* Empty space needed for rendering */}
        <div className="col" />
      </div>

      {/* Product Contents -------------------------------- */}
      <div className="row">
        {/* Product Image */}
        <div className="col-12 col-md-6 text-center mb-3 mb-md-0">
          <img
            src={product.api_featured_image}
            className="img-fluid imageProductDetails"
            alt="product"
          />
        </div>

        {/* Product Information */}
        <div className="col-12 col-md-6">
          {/* Product Name and AddToCart Button */}
          <div
            className="col-12 d-flex d-inline-flex justify-content-between"

          >
            {/* Name */}
            <div className="p-0 mt-2">
              <h4 className="fw-bold">{product.name}</h4>
            </div>

            {/* AddToCart Button */}
            <div className="p-0">
              <button
                className="btn btn-light"
                onClick={() => {
                  onAdd(product);
                }}
              >
                <i className="fa-solid fa-cart-plus fs-2 py-1" />
              </button>
            </div>
          </div>

          {/* Extra Product Information */}
          <div className="d-flex flex-column">
            {/* Barnd */}
            <div className="d-flex d-inline-flex">
              <h5 className="fw-bold me-2">Brand: </h5>
              <h5>{capitalizeFirst(product.brand)}</h5>
            </div>

            {/* Price */}
            <div className="d-flex d-inline-flex">
              <h5 className="fw-bold me-2">Price: </h5>
              <h5>{`$${product.price}`}</h5>
            </div>

            {/* Description */}
            <div>
              {/* Conditional rendering of description */}
              {product.description !== "" ?
                <>
                  <h5 className="fw-bold">Description: </h5>
                  <Description />
                </>
                : ""}
            </div>

            {/* Tags */}
            <div>
              {/* Conditional rendering of tags list */}
              {product.tag_list?.length !== 0 ?
                <>
                  <h5 className="fw-bold">Tags: </h5>
                  <TagsList />
                </>
                : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
