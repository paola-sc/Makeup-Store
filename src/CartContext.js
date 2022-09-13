import React, { useState, createContext } from "react";

export const CartContext = createContext([]);

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const onAdd = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      setCart(
        cart?.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist.qty === 1) {
      setCart(cart?.filter((item) => item.id !== product.id));
    } else {
      setCart(
        cart?.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item
        )
      );
    }
  };

  return (
    <CartContext.Provider value={{ cart, onAdd, onRemove }}>
      {props.children}
    </CartContext.Provider>
  );
};
