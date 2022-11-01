import React from "react";
import styled from "styled-components";

import Item from "./Item";

function ItemList({ productList }) {
  return (
    <StyledItemList>
      {productList.map((product) => (
        <Item product={product} key={product.id} />
      ))}
    </StyledItemList>
  );
}

const StyledItemList = styled.section`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  column-gap: 3rem;
  row-gap: 3rem;
`;

export default ItemList;
