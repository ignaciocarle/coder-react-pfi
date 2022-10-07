import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { CartContext } from "../../context/CartContext";

import ItemCount from "./ItemCount";

function ItemDetail({ product }) {
  const { title, description, price, image } = product;
  const [displayItemCount, setDisplayItemCount] = useState(true);
  const { addItem } = useContext(CartContext);

  const onAdd = (count) => {
    setDisplayItemCount(false);
    addItem(product, count);
  };

  return (
    <StyledItemDetail>
      <img src={image} alt={title} />
      <div>
        <h1>{title}</h1>
        <h3>$ {price}</h3>
        <p>{description}</p>
        {displayItemCount ? (
          <ItemCount stock="10" initial="1" onAdd={onAdd} />
        ) : (
          <Link to="/cart">
            <button>Finalizar Compra</button>
          </Link>
        )}
      </div>
    </StyledItemDetail>
  );
}

const StyledItemDetail = styled.article`
  padding: 1.5rem 10% 0;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: start;
  column-gap: 3rem;

  & > img {
    max-width: 450px;
    max-height: 450px;
    object-fit: contain;
  }

  & > div {
    padding-top: 1.5rem;
    display: flex;
    flex-flow: column;
    justify-content: start;
    row-gap: 1.5em;
  }
`;

export default ItemDetail;
