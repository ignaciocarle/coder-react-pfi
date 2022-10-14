import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const itemsInCart = cart.reduce((acc, item) => acc + item.qty, 0);

  const cartTotalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  useEffect(() => {
    console.log("%cCarrito actualizado:", "color: red");
    console.dir(cart);
  }, [cart]);

  //FUNCIONES DE MANEJO DEL CARRITO

  const isInCart = (id) => {
    return !!cart.find((item) => item.id === id);
  };

  const createItem = (item, qty) => {
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
    setCart(isInCart(item.id) ? updateItem(item, qty) : createItem(item, qty));
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
