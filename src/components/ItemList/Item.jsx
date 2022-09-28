import React from "react";
import { Link } from "react-router-dom";

function Item({ product }) {
  const { title, price, image } = product;

  return (
    <article style={s.article}>
      <Link style={s.container} to={"/item/" + product.id}>
        <img style={s.img} src={image} alt={title} />
        <h3 style={s.title}>{title}</h3>
        <h3 style={s.price}>$ {price}</h3>
      </Link>
    </article>
  );
}

const s = {
  article: {
    width: "26%",
    minHeight: "fit-content",
  },
  container: {
    padding: "1.5rem",
    display: "flex",
    flexFlow: "column",
    justifyContent: "start",
    alignItems: "center",
    rowGap: "1rem",
    border: "solid 1px var(--primary-700)",
    borderRadius: "1rem",
  },
  img: {
    width: "220px",
    height: "220px",
    objectFit: "contain",
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
