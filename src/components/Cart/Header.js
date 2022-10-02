import React from "react";

export const Header = (props) => {
  /* Importing items count */
  const { countCartItems } = props;

  return (
    <div
      className="row d-flex justify-content-between m-0 my-4"
    >
      {/* Page title */}
      <div className="col-6 m-0 p-0">
        <h2 className="fw-bold m-0">Shopping Cart</h2>
      </div>

      {/* Items Count */}
      <div className="col-4 m-0 p-0 d-flex d-inline-flex justify-content-end fs-3">
        <span className="fw-bold black">Items</span>
        <span className="badge bg-dark ms-2 m-1">{countCartItems}</span>
      </div>
    </div>
  );
};
