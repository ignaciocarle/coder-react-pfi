import React, { useState, useContext } from "react";
import styled from "styled-components";

import { CartContext } from "../../context/CartContext";

import { Button } from "../UI/Button";
import CartDetail from "./CartDetail";

function Cart() {
  const { cart } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");

  if (orderId) {
    return (
      <StyledCart as="section">
        <h2>Gracias por tu compra</h2>
        <p>El código de tu orden es {orderId}</p>
        <Button to="/">Volver a la Home</Button>
      </StyledCart>
    );
  } else {
    return (
      <StyledCart as="section">
        <h1>Carrito</h1>
        {cart.length !== 0 ? (
          <CartDetail setOrderId={setOrderId} />
        ) : (
          <>
            <p>No hay productos en el carrito</p>
            <Button to="/">Volver a la Home</Button>
          </>
        )}
      </StyledCart>
    );
  }
}

const StyledCart = styled.section`
  width: 100%;
  padding: 1.5rem 15%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  row-gap: 2rem;
`;

export default Cart;
