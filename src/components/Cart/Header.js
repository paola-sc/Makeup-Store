import React from "react";

export const Header = (props) => {
  const { countCartItems } = props;

  return (
    <div className="p-4 pb-md-5 black col-11 d-flex flex-column justify-content-center mx-auto">
      <div
        className="row d-flex justify-content-between d-inline-flex"
        style={{ width: "100%" }}
      >
        <div className="col m-0 p-1">
          <h1 className="fw-bold m-0">Shopping Cart</h1>
        </div>
        <div className="col-4 fs-3 text-end m-0 p-1">
          <div className="fw-bold m-0">
            Items<span className="badge bg-dark ms-2">{countCartItems}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
