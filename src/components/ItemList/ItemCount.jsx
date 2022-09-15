import React, { useState } from "react";

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

  const onAddHandler = () => {
    onAdd(count);
  };

  return (
    <>
      <h1>{count}</h1>
      <div>
        <button onClick={countSubs}>-</button>
        <button onClick={countAdd}>+</button>
      </div>
      <button onClick={onAddHandler}>Comprar</button>
    </>
  );
}

export default ItemCount;
