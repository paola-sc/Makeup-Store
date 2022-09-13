import React from "react";

export const Basket = (props) => {
  const { cartItems, onAdd, onRemove } = props;

  const itemsPrice = cartItems.reduce(
    (a, c) => a + parseInt(c.price) * c.qty,
    0
  );

  const taxPrice = itemsPrice * 0.14;

  const shippingPrice = itemsPrice > 2000 ? 0 : 50;

  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <div className="p-4 pb-md-5 black col-11 d-flex flex-column justify-content-center mx-auto">
      <div
        className="row d-flex justify-content-between flex-column"
        style={{ width: "100%" }}
      >
        <div className="col m-0 p-0">
          <h1 className="fw-bold m-0">Cart Items</h1>
        </div>
        <div className="col superLightPink rounded my-2 py-2">
          {cartItems.length === 0 ? (
            <h4 className="m-2">Your cart is empty</h4>
          ) : (
            <div>
              {cartItems.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="row d-flex flex-wrap justify-content-between px-2 px-md-3 px-lg-4 my-2 mb-3"
                    style={{ width: "99%" }}
                  >
                    <div className="col-12 col-sm-6 col-md-6">
                      <div className="fs-5 mb-1">{item.name}</div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-5 col-lg-4 d-flex d-inline-flex justify-content-between">
                      <div className="me-2">
                        <button
                          className="btn btn-success me-2"
                          onClick={() => onAdd(item)}
                        >
                          <i className="fa-solid fa-plus" />
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => onRemove(item)}
                        >
                          <i className="fa-solid fa-minus" />
                        </button>
                      </div>
                      <div className="mt-1 fs-5 text-right">
                        {item.qty} x ${parseInt(item.price).toFixed(2)}
                      </div>
                    </div>
                  </div>
                );
              })}
              {cartItems.length !== 0 && (
                <>
                  <hr />
                  <div className="px-2 px-md-3 px-lg-4 my-2 mb-2">
                    <div className="row">
                      <div className="col-6 col-sm-3 col-md-3">Items Price</div>
                      <div className="col-6 col-sm-3 col-md-3 text-right">
                        ${itemsPrice.toFixed(2)}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6 col-sm-3 col-md-3">Tax Price</div>
                      <div className="col-6 col-sm-3 col-md-3 text-right">
                        ${taxPrice.toFixed(2)}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6 col-sm-3 col-md-3">
                        Shipping Price
                      </div>
                      <div className="col-6 col-sm-3 col-md-3 text-right">
                        ${shippingPrice.toFixed(2)}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6 col-sm-3 col-md-3 fw-bold">
                        Total Price
                      </div>
                      <div className="col-6 col-sm-3 col-md-3 fw-bold text-right">
                        ${totalPrice.toFixed(2)}
                      </div>
                      <hr className="mt-3" />
                      <div className="row mx-auto " style={{ width: "20rem" }}>
                        <button
                          className="btn btn-dark"
                          onClick={() => alert("Implement Checkout")}
                        >
                          Checkout
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
