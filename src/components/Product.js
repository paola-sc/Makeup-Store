import React from "react";
import { Link } from "react-router-dom";

export const Product = (product) => {
  return (
    <div
      className="rounded shadow text-center m-3 p-3 d-flex flex-column align-items-center"
      style={{ width: "18rem" }}
    >
      <div className="my-auto">
        <div style={{ width: "10rem" }} className="mx-auto mt-3">
          <img src={product.image} className="img-fluid" alt="product" />
        </div>
        <h4 className="mt-3">{product.name}</h4>
        <Link
          to={`/products/${product.id}`}
          className="text-decoration-none salmon fs-5"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

/* 

<div className="card border text-center m-3" style={{ width: "18rem" }}>
      <div className="card-body">
        <div style={{ width: "10rem" }} className="mx-auto">
          <img src={product.image} className="img-fluid" alt="product" />
        </div>
        <h5 className="card-title mt-3">{product.name}</h5>
        <Link
          to={`/products/${product.id}`}
          className="card-link text-decoration-none salmon"
        >
          Details
        </Link>
      </div>
    </div>

*/
