import React from "react";
import Item from "./Item";

function ItemList({ productList }) {
  return (
    <section style={s.section}>
      {productList.map((product) => (
        <Item product={product} key={product.id} />
      ))}
    </section>
  );
}

const s = {
  section: {
    padding: "1.5rem 10% 0",
    width: "100%",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "start",
    columnGap: "5% ",
    rowGap: "2rem",
  },
};

export default ItemList;
