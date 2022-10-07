import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { CartContext } from "../../context/CartContext";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function CartWidget() {
  const { itemsInCart } = useContext(CartContext);

  return (
    <>
      <StyledCartWidget to="/cart">
        {itemsInCart !== 0 && <h4>{itemsInCart}</h4>}
        <ShoppingCartOutlinedIcon fontSize="large" />
      </StyledCartWidget>
    </>
  );
}

const StyledCartWidget = styled(Link)`
  padding: 0.5rem;
  display: flex;
  justify-content: end;
  align-items: center;
  column-gap: 0.5em;
`;

export default CartWidget;
