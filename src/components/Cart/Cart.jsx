import React, { useContext } from "react";
import styled from "styled-components";

import { CartContext } from "../../context/CartContext";

import { Button } from "../UI/Button";
import CartDetail from "./CartDetail";

function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <StyledCart as="section">
      <h1>Carrito</h1>
      {cart.length !== 0 ? (
        <CartDetail />
      ) : (
        <>
          <p>No hay productos en el carrito</p>
          <Button to="/">Volver a la Home</Button>
        </>
      )}
    </StyledCart>
  );
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
