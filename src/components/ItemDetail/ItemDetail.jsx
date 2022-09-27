import React from "react";

function ItemDetail({ product }) {
  const { title, description, price, image } = product;

  return (
    <article style={s.article}>
      <img style={s.img} src={image} alt={title} />
      <div style={s.details}>
        <h1>{title}</h1>
        <h3>$ {price}</h3>
        <p style={s.description}>{description}</p>
      </div>
    </article>
  );
}
const s = {
  article: {
    padding: "1.5rem",
    width: "100%",
    height: "fit-content",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "start",
    columnGap: "3rem",
    border: "dashed 1px var(--primary-700)",
  },
  img: {
    width: "450px",
    height: "450px",
    objectFit: "contain",
  },
  details: {
    paddingTop: "1.5rem",
    display: "flex",
    flexFlow: "column",
    justifyContent: "start",
    rowGap: "1rem",
  },
};

export default ItemDetail;
