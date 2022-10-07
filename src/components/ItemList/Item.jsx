import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Item({ product }) {
  const { title, price, image } = product;

  return (
    <StyledItem>
      <Link to={"/item/" + product.id}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <h3>$ {price}</h3>
      </Link>
    </StyledItem>
  );
}

const StyledItem = styled.article`
  width: 26%;

  & > a {
    height: 100%;
    padding: 1.5rem;
    display: flex;
    flex-flow: column;
    justify-content: start;
    align-items: center;
    row-gap: 1rem;
    border: solid 1px var(--brand-primary);
    border-radius: 1rem;

    & > img {
      width: 220px;
      height: 220px;
      object-fit: contain;
    }

    & > h3 {
      text-align: center;
    }

    & :last-child {
      margin-top: auto;
    }
  }
`;

export default Item;
