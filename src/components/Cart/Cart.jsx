import React, { useContext } from "react";
import styled from "styled-components";

import { CartContext } from "../../context/CartContext";

import { breakpoints } from "../UI/breakpoints";
import { MainContainer } from "../UI/Containers";
import { Button } from "../UI/Button";

import CartDetail from "./CartDetail";

function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <MainContainer>
      <h1>Carrito</h1>
      <StyledCart>
        {cart.length !== 0 ? (
          <CartDetail />
        ) : (
          <>
            <p>No hay productos en el carrito</p>
            <Button to="/">Volver a la Home</Button>
          </>
        )}
      </StyledCart>
    </MainContainer>
  );
}

const StyledCart = styled.section`
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  row-gap: 2rem;

  @media ${breakpoints.lg} {
    padding: 0 10%;
  }
`;

export default Cart;
