import React, { useContext } from "react";

import { CartContext } from "../../context/CartContext";

import { ButtonContainer, Button, ButtonOutlined } from "../UI/Button";
import {
  ProductsListTable,
  ProductsListAmount,
} from "../Shared/ProductsDetail";

function CartDetail() {
  const { cart, removeItem, clearCart, cartTotalAmount } =
    useContext(CartContext);

  return (
    <>
      <ProductsListTable
        productList={cart}
        actionDisplay={true}
        action={removeItem}
        actionText="❌"
      />

      <ProductsListAmount totalAmount={cartTotalAmount} />

      <ButtonContainer>
        <ButtonOutlined onClick={clearCart}>Limpiar el Carrito</ButtonOutlined>
        <ButtonOutlined to="/">Seguir Comprando</ButtonOutlined>
        <Button to="/place-order">Finalizar Compra</Button>
      </ButtonContainer>
    </>
  );
}

export default CartDetail;
