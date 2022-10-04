import React, { useContext } from "react";

import { CartContext } from "../../context/CartContext";

function Table() {}

function Cart() {
  const { cart, removeItem, clearCart } = useContext(CartContext);

  return (
    <>
      <h1>Cart</h1>
      {cart.length !== 0 ? (
        <>
          <table>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
              <th>Acciones</th>
            </tr>
            {cart.map((item) => (
              <tr key={item.id}>
                <th>{item.title}</th>
                <th>$ {item.price}</th>
                <th>{item.qty}</th>
                <th>$ {item.price * item.qty}</th>
                <th>
                  <button onClick={() => removeItem(item.id)}>X</button>
                </th>
              </tr>
            ))}
          </table>
          <button onClick={clearCart}>Limpiar el Carrito</button>
        </>
      ) : null}
    </>
  );
}

export default Cart;
