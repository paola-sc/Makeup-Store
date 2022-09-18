import React, { useContext } from "react";
import { Basket } from "../components/Cart/Basket";
import { Header } from "../components/Cart/Header";
import { CartContext } from "../CartContext";
import Img1 from "../images/cart-1.png";
import Img2 from "../images/cart-2.png";
import Img3 from "../images/cart-3.png";

export const Cart = () => {
  /* Importing cart object and the functions to add/remove items */
  const { cart, onAdd, onRemove } = useContext(CartContext);

  return (
    <>
      {cart ? (
        <div className="col-11 mx-auto mb-5">
          {/* Calling components while passing the cart and its functions */}
          <Header countCartItems={cart.length} />
          <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cart} />

          {cart.length === 0 ?
            <>
              <h3 className="fw-bold">Thank you for visiting our store</h3>
              <div className="row d-flex justify-content-around d-inline-flex flex-wrap my-2 my-md-3">
                <div className="col-12 col-md-4 mb-3 mb-md-0">
                  <img src={Img1} alt="Close up to an eyeshadow pallette on a table" className="img-fluid" />
                </div>
                <div className="col-12 col-md-4 mb-3 mb-md-0">
                  <img src={Img2} alt="Woman applying lipstick in front of mirror" className="img-fluid" />
                </div>
                <div className="col-12 col-md-4 mb-3 mb-md-0">
                  <img src={Img3} alt="Lipsticks spread over table with some powder spread around fo dramatic effect" className="img-fluid" />
                </div>
              </div>
            </>
            : ""}
        </div>
      ) : (
        <h1>loading</h1>
      )}
    </>
  );
};
