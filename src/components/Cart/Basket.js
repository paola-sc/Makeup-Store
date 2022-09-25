import React from "react";
import { Item } from "./Item";
import { Checkout } from "../Checkout";

export const Basket = (props) => {
  /* Checkout Modal controls */
  const [modalShow, setModalShow] = React.useState(false);

  /* Importing cart and its functions*/
  const { cartItems, onAdd, onRemove } = props

  /* Math needed to calculate cart prices */
  const itemsPrice = cartItems.reduce(
    (a, c) => a + parseInt(c.price) * c.qty,
    0
  );

  const taxPrice = itemsPrice * 0.14;

  const shippingPrice = itemsPrice > 2000 ? 0 : 50;

  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <div
      className="row d-flex justify-content-between flex-column m-0 mb-5"
    >
      {/* Title */}
      <div className="col m-0 p-0">
        <h2 className="fw-bold m-0 mb-3">Cart Items</h2>
      </div>

      {/* Conditional rendering of basket row d-flex d-inline-flex flex-wrap mt-3 mx-1 mb-4*/}
      <div className="col lightPink my-2 py-2 rounded">
        {cartItems.length === 0 ? (
          <h4 className="m-2">Your cart is empty</h4>
        ) : (
          <div>
            <div className="flex d-inline-flex flex-wrap justify-content-around">
              {cartItems?.map((item, i) => {
                return (
                  <Item
                    key={i}
                    item={item}
                    onAdd={onAdd}
                    onRemove={onRemove}
                  />
                );
              })}
            </div>

            {/* Conditional rendering of basket price */}
            {cartItems.length !== 0 && (
              <div className="mx-3 fs-4">

                <hr />

                <div className="mb-2">
                  {/* Items price */}
                  <div className="row">
                    <div className="col-6 col-sm-3 col-md-3">Items Price</div>
                    <div className="col-6 col-sm-3 col-md-3 text-right">
                      ${itemsPrice.toFixed(2)}
                    </div>
                  </div>

                  {/* Tax price */}
                  <div className="row">
                    <div className="col-6 col-sm-3 col-md-3">Tax Price</div>
                    <div className="col-6 col-sm-3 col-md-3 text-right">
                      ${taxPrice.toFixed(2)}
                    </div>
                  </div>

                  {/* Shipping price */}
                  <div className="row">
                    <div className="col-6 col-sm-3 col-md-3">
                      Shipping Price
                    </div>
                    <div className="col-6 col-sm-3 col-md-3 text-right">
                      ${shippingPrice.toFixed(2)}
                    </div>
                  </div>

                  {/* Total price */}
                  <div className="row">
                    <div className="col-6 col-sm-3 col-md-3 fw-bold">
                      Total Price
                    </div>
                    <div className="col-6 col-sm-3 col-md-3 fw-bold text-right">
                      ${totalPrice.toFixed(2)}
                    </div>
                  </div>

                  {/* Checkout button */}
                  <div className="row">
                    <div className="col-6 col-sm-3 col-md-3 mt-3">
                      <button
                        className="btn btn-dark fs-5"
                        onClick={() => setModalShow(true)}
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <Checkout
        show={modalShow}
        onHide={() => setModalShow(false)}
        price={totalPrice}
      />
    </div>
  );
};
