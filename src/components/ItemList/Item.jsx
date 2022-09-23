import React from "react";
import Spacer from "../UI/Spacer";

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
    padding: "1.5rem",
    width: "30%",
    minHeight: "fit-content",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    rowGap: "1rem",
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
