/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";
import axios from "axios";
import "../index.css";

export const ProductDetails = () => {
  let { id } = useParams();

  let [product, setProduct] = useState([]);

  const { onAdd } = useContext(CartContext);

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

  const capitalizeFirst = (str) => {
    return str?.charAt(0).toUpperCase() + str?.slice(1);
  };

  const TagsList = () => {
    const tags = product.tag_list;

    return (
      <ul style={{ listStyleType: "none" }} className="p-0 m-0">
        {tags?.map((tag, i) => (
          <li
            key={i}
            style={{ display: "inline-block" }}
            className="mb-2 me-2 px-2 py-1 superLightPink rounded"
          >
            {tag}
          </li>
        ))}
      </ul>
    );
  };

  const Description = () => {
    return { __html: product.description };
  };

  return (
    <div className="p-4 pb-5 black col-md-8 col-lg-7 col-xl-6 d-flex flex-column justify-content-center mx-auto">
      <div
        className="d-flex d-inline-flex justify-content-between my-2 mb-md-5"
        style={{ width: "100%" }}
      >
        <div className="col">
          <Link to="/">
            <i className="fa-solid fa-arrow-left fs-1 black" />
          </Link>
        </div>
        <div className="col-10 text-center">
          <h3 className="fw-bold m-0 mt-md-2">Details</h3>
        </div>
        <div className="col" />
      </div>
      <div style={{ width: "20rem" }} className="mx-auto mb-3 text-center">
        <img
          src={product.api_featured_image}
          className="img-fluid"
          alt="product"
        />
      </div>
      <div
        className="row d-flex justify-content-between d-inline-flex"
        style={{ width: "100%" }}
      >
        <div className="col mt-2 m-0">
          <h4 className="fw-bold">{product.name}</h4>
        </div>
        <div className="col-3 text-end">
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
      <div className="d-flex flex-column">
        <div className="d-flex d-inline-flex">
          <h5 className="fw-bold me-2">Brand: </h5>
          <h5>{capitalizeFirst(product.brand)}</h5>
        </div>
        <div className="d-flex d-inline-flex">
          <h5 className="fw-bold me-2">Price: </h5>
          <h5>{`$${product.price}`}</h5>
        </div>
        <div>
          <h5 className="fw-bold">Description:</h5>
          <div dangerouslySetInnerHTML={Description()} className="mt-2 mb-4" />
        </div>
        <div>
          <h5 className="fw-bold">Tags:</h5>
          <h6>
            <TagsList />
          </h6>
        </div>
      </div>
    </div>
  );
};
