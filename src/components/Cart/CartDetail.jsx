import React, { useContext, useState } from "react";
import styled from "styled-components";

import { CartContext } from "../../context/CartContext";
import { newOrder } from "../../services/ordersService";

import { Button } from "../UI/Button";

function CartDetail({ setOrderId }) {
  const { cart, removeItem, clearCart, cartTotalAmount } =
    useContext(CartContext);

  const handleNewOrder = async () => {
    const id = await newOrder(cart, cartTotalAmount);
    setOrderId(id);
    clearCart();
  };

  return (
    <>
      <StyledCartDetail>
        <col width="60%" />
        <col width="15%" />
        <col />
        <col width="15%" />
        <col />

        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td className="title">{item.title}</td>
              <td>$ {item.price}</td>
              <td>{item.qty}</td>
              <td>$ {item.price * item.qty}</td>
              <td className="removeBtn" onClick={() => removeItem(item.id)}>
                ❌
              </td>
            </tr>
          ))}
        </tbody>
      </StyledCartDetail>

      <StyledAmount>
        <h3>Total:</h3>
        <h3>$ {cartTotalAmount}</h3>
      </StyledAmount>

      <Button as="button" onClick={clearCart}>
        Limpiar el Carrito
      </Button>

      <Button as="button" onClick={handleNewOrder}>
        Finalizar Compra
      </Button>
    </>
  );
}

const StyledCartDetail = styled.table`
  border-bottom: 1px solid var(--brand-primary);
  border-collapse: collapse;

  & thead tr {
    background-color: var(--brand-primary);
    color: var(--primary-200);
  }

  & tbody tr:nth-child(2n) {
    background-color: var(--primary-200);
  }

  & th,
  td {
    padding: 0.5em;
    font-size: 0.9em;
  }

  & th {
    font-weight: 500;
  }

  & td:not(.title) {
    text-align: end;
  }

  & .removeBtn {
    cursor: pointer;
  }
`;

const StyledAmount = styled.div`
  display: flex;
  align-self: end;
  column-gap: 3em;
`;

export default CartDetail;
