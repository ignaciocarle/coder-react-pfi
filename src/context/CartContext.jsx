import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.dir(cart); //solo se usa a fines de debug
  }, [cart]);

  const isInCart = (id) => {
    return !!cart.find((item) => item.id === id);
  };

  const addItem = (item, qty) => {
    if (!isInCart(item.id)) {
      item.qty = qty;
      setCart([...cart, item]);
    } else {
      const newCart = cart.map((thisItem) => {
        if (!(thisItem.id === item.id)) return thisItem;
        thisItem.qty += qty;
        return thisItem;
      });
      setCart(newCart);
    }

    console.log(`Added ${qty} units of "${item.title}" to Cart.`);
  };
  const removeItem = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
