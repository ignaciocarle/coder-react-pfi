import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { CartContext } from "../../context/CartContext";
import { newOrder } from "../../services/ordersService";

import { MainContainer } from "../UI/Containers";
import { Button } from "../UI/Button";
import {
  ProductsListTable,
  ProductsListAmount,
} from "../Shared/ProductsDetail";

import CheckOutForm from "./CheckOutForm";

function OrderContainer() {
  const navigate = useNavigate();
  const { cart, cartTotalAmount, clearCart } = useContext(CartContext);

  const handleNewOrder = async (formValues) => {
    const totalAmount = cartTotalAmount();
    const orderId = await newOrder(cart, totalAmount, formValues);
    clearCart();
    navigate(`/thank-you/${orderId}`);
  };

  return (
    <>
      <MainContainer>
        <h1>Finalizar Compra</h1>
        <StyledCheckOut>
          {cart.length !== 0 ? (
            <>
              <ProductsListTable productList={cart} actionDisplay={false} />
              <ProductsListAmount totalAmount={cartTotalAmount} />
              <CheckOutForm handleNewOrder={handleNewOrder}></CheckOutForm>
            </>
          ) : (
            <>
              <p>No hay productos en el carrito</p>
              <Button to="/">Volver a la Home</Button>
            </>
          )}
        </StyledCheckOut>
      </MainContainer>
    </>
  );
}

const StyledCheckOut = styled.section`
  width: 100%;
  padding: 0 10%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  row-gap: 2rem;
`;

export default OrderContainer;
