import React, { useContext } from "react";
import { Basket } from "../components/Cart/Basket";
import { Header } from "../components/Cart/Header";
import { CartContext } from "../CartContext";

export const Cart = () => {
  /* Importing cart object and the functions to add/remove items */
  const { cart, onAdd, onRemove } = useContext(CartContext);

  return (
    <>
      {cart ? (
        <div className="col-11 mx-auto mb-5" style={{ minHeight: "60vh" }}>
          {/* Calling components while passing the cart and its functions */}
          <Header countCartItems={cart.length} />
          <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cart} />
        </div>
      ) : (
        <h1>loading</h1>
      )}
    </>
  );
};