import React from "react";

const ItemListContainer = ({ greeting }) => {
  return (
    <main style={styles.main}>
      <h3>{greeting}</h3>
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
