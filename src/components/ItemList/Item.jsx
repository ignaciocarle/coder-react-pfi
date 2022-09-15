import React from "react";

function Item({ product }) {
  return (
    <article style={styles.article}>
      <img style={styles.img} src={product.pictureUrl} alt={product.title} />
      <h3 style={styles.title}>{product.title}</h3>
      <h3 style={styles.price}>$ {product.price}</h3>
    </article>
  );
}

const styles = {
  article: {
    display: "flex",
    flexFlow: "column",
    justifyContent: "start",
    alignItems: "center",
    width: "30%",
    height: "320px",
    padding: "1.5rem",
    border: "solid 1px var(--primary-700)",
  },
  img: {
    height: "200px",
  },
  title: {
    textAlign: "center",
  },
  price: {
    marginTop: "auto",
    textAlign: "center",
  },
};

export default Item;
