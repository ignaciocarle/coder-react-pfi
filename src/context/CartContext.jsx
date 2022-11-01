import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) ?? []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  //FUNCIONES DE MANEJO DEL CARRITO

  const itemsInCart = () => {
    return cart.reduce((acc, item) => acc + item.qty, 0);
  };

  const cartTotalAmount = () => {
    return cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  };

  const isInCart = (id) => {
    return !!cart.find((item) => item.id === id);
  };

  const addNewItem = (item, qty) => {
    return [...cart, { ...item, qty: qty }];
  };

  const updateItem = (item, qty) => {
    return cart.map((thisItem) => {
      if (!(thisItem.id === item.id)) return thisItem;
      thisItem.qty += qty;
      return thisItem;
    });
  };

  const addItem = (item, qty) => {
    setCart(isInCart(item.id) ? updateItem(item, qty) : addNewItem(item, qty));
  };

  const removeItem = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        itemsInCart,
        cartTotalAmount,
        addItem,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
