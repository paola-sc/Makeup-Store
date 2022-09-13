import React from "react";

export const Item = (props) => {
  const { product } = props;

  return (
    <div
      className="rounded text-center border bg-white m-2 p-2 d-flex flex-column align-items-center"
      style={{ width: "15rem" }}
    >
      <div className="my-auto">
        <div style={{ width: "8rem" }} className="mx-auto my-2">
          <img
            src={product.api_featured_image}
            className="img-fluid"
            alt="product"
          />
        </div>
        <div className="text-center">
          <h5 className="my-2">{product.name}</h5>
          <h5 className="my-2">{`$${product.price}`}</h5>
        </div>
      </div>
    </div>
  );
};
