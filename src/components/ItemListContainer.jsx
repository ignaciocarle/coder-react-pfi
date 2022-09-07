import React from "react";
import ItemCount from "./ItemCount";

function onAdd(count) {
  console.log(`Se agregaron ${count} items al carrito.`);
}

const ItemListContainer = ({ greeting }) => {
  return (
    <main style={styles.main}>
      <h3>{greeting}</h3>
      <ItemCount stock="10" initial="1" onAdd={onAdd} />
    </main>
  );
};

const styles = {
  main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    padding: "1.5rem 3rem 0",
  },
};

export default ItemListContainer;
