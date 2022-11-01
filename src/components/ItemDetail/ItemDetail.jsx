import React, { useState, useContext } from "react";
import styled from "styled-components";

import { CartContext } from "../../context/CartContext";

import { breakpoints } from "../UI/breakpoints";
import { ButtonContainer, Button, ButtonOutlined } from "../UI/Button";

import ItemCount from "./ItemCount";

function ItemDetail({ product }) {
  const { title, description, price, image, stock } = product;
  const [displayItemCount, setDisplayItemCount] = useState(true);
  const { addItem } = useContext(CartContext);

  const onAdd = (count) => {
    addItem(product, count);
    setDisplayItemCount(false);
  };

  return (
    <StyledItemDetail>
      <img src={image} alt={title} />
      <div className="productInfo">
        <h2>{title}</h2>
        <h3>$ {price}</h3>
        <p>{description}</p>
        {displayItemCount ? (
          <ItemCount stock={stock} initial="1" onAdd={onAdd} />
        ) : (
          <>
            <ButtonContainer>
              <ButtonOutlined to="/">Seguir Comprando</ButtonOutlined>
              <Button to="/cart">Ir al Carrito</Button>
            </ButtonContainer>
          </>
        )}
      </div>
    </StyledItemDetail>
  );
}

const StyledItemDetail = styled.section`
  margin-top: 3rem;
  display: flex;
  flex-flow: column;
  justify-content: stretch;
  align-items: center;
  row-gap: 3rem;

  & > img {
    max-width: 300px;
    max-height: 300px;
    object-fit: contain;
  }

  & > div.productInfo {
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: start;
    row-gap: 1.5em;
  }

  @media ${breakpoints.lg} {
    flex-flow: row;
    justify-content: center;
    align-items: start;
    column-gap: 4.5rem;

    & > img {
      max-width: 450px;
      max-height: 450px;
    }

    & > div.productInfo {
      max-width: 50%;
    }
  }
`;

export default ItemDetail;
