import React from "react";
import { Link } from "react-router-dom";
import "../index.css"

export const Product = (props) => {

  return (
    <div
      className="text-center m-3 p-3 d-flex flex-column align-items-center borderPink black rounded"
      style={{ width: "18rem" }}
    >
      <div className="my-auto">
        {/* Image */}
        <div style={{ width: "10rem" }} className="mx-auto mt-3">
          <img src={props.image} className="img-fluid imageProduct" alt={props.name} />
        </div>

        {/* Name */}
        <h4 className="mt-3">{props.name}</h4>

        {/* Details Button */}
        <Link
          to={`/products/${props.type}/${props.id}`}
          className="text-decoration-none salmon fs-5"
        >
          Details
        </Link>
      </div>
    </div>
  );
};