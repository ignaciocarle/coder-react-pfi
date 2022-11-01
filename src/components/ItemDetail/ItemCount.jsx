import { Alert } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";

import { Button } from "../UI/Button";

function ItemCount({ stock, initial, onAdd, stockError }) {
  const [count, setCount] = useState(parseInt(initial));
  const [displayStockError, setDisplayStockError] = useState(false);

  const countAdd = () => {
    if (count === parseInt(stock)) {
      setDisplayStockError(true);
      return;
    }
    setCount(count + 1);
  };

  const countSubs = () => {
    if (displayStockError) {
      setDisplayStockError(false);
    }
    if (count === parseInt(initial)) return;
    setCount(count - 1);
  };

  return (
    <>
      <StyledItemCount>
        <div>
          <Button onClick={countSubs}>◀</Button>
          <h2>{count}</h2>
          <Button onClick={countAdd}>▶</Button>
        </div>
        <Button onClick={() => onAdd(count)}>Agregar al Carrito</Button>
        {displayStockError && (
          <Alert severity="error">
            Solo disponemos de {stock} unidades de éste producto
          </Alert>
        )}
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

  & > .MuiAlert-root {
    border-radius: 0.5em;
  }
`;

export default ItemCount;
