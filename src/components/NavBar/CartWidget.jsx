import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { CartContext } from "../../context/CartContext";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import styled from "styled-components";

function CartWidget() {
  const { cart } = useContext(CartContext);
  const itemsInCart = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <>
      <StyledNavLink to="/cart">
        {itemsInCart !== 0 ? <h4>{itemsInCart}</h4> : null}
        <ShoppingCartOutlinedIcon fontSize="large" />
      </StyledNavLink>
    </>
  );
}

const StyledNavLink = styled(NavLink)`
  padding: 0.5rem;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export default CartWidget;
