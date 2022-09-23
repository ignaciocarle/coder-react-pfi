import React from "react";

function Item({ product }) {
  const { title, price, pictureUrl } = product;

  return (
    <article style={s.article}>
      <img style={s.img} src={pictureUrl} alt={title} />
      <h3 style={s.title}>{title}</h3>
      <h3 style={s.price}>$ {price}</h3>
    </article>
  );
}

const s = {
  article: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    width: "30%",
    height: "320px",
    padding: "1.5rem",
    border: "solid 1px var(--primary-700)",
    borderRadius: "1rem",
  },
  img: {
    maxWidth: "100%",
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
