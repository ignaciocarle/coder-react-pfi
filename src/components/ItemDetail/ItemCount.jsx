import React, { useState } from "react";
import styled from "styled-components";

import { Button } from "../UI/Button";

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(parseInt(initial));

  const countAdd = () => {
    if (count === parseInt(stock)) {
      console.log("No hay mas stock");
      return;
    }
    setCount(count + 1);
  };

  const countSubs = () => {
    if (count === parseInt(initial)) return;
    setCount(count - 1);
  };

  return (
    <>
      <StyledItemCount>
        <div>
          <Button as="button" onClick={countSubs}>
            ◀
          </Button>
          <h1>{count}</h1>
          <Button as="button" onClick={countAdd}>
            ▶
          </Button>
        </div>
        <Button as="button" onClick={() => onAdd(count)}>
          Comprar
        </Button>
      </StyledItemCount>
    </>
  );
}

const StyledItemCount = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  row-gap: 0.5em;

  & > div {
    display: flex;
    flex-flow: row;
    align-items: center;
    column-gap: 0.5em;
  }
`;

export default ItemCount;
