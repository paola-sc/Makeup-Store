import React, { useContext } from "react";
import { Basket } from "../components/Cart/Basket";
import { Header } from "../components/Cart/Header";
import { Main } from "../components/Cart/Main";
import { CartContext } from "../CartContext";

export const Cart = () => {
  const { cart, onAdd, onRemove } = useContext(CartContext);

  return (
    <>
      {cart ? (
        <div>
          <Header countCartItems={cart.length} />
          <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cart} />
          <Main onAdd={onAdd} products={cart} />
        </div>
      ) : (
        <h1>loading</h1>
      )}
    </>
  );
};
