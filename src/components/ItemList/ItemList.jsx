import React from "react";
import Item from "./Item";

function ItemList({ productList }) {
  return (
    <section style={styles.section}>
      {productList.map((product) => (
        <Item product={product} key={product.id} />
      ))}
    </section>
  );
}

const styles = {
  section: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "start",
    columnGap: "5% ",
    rowGap: "2rem",
    width: "100%",
    padding: "1.5rem 10% 0",
  },
};

export default ItemList;
