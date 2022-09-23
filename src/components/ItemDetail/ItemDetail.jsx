import React from "react";

function ItemDetail({ product }) {
  const { id, title, description, price, pictureUrl } = product;

  return (
    <article style={{ ...s.article, ...s.testBorder }}>
      <img style={s.img} src={pictureUrl} alt={title} />
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
    justifyContent: "space-around",
    alignItems: "start",
    rowGap: "2rem",
    //height: "320px",
  },
  img: {
    minWidth: "40%",
    maxWidth: "650px",
  },
  details: {
    paddingTop: "1.5rem",
    display: "flex",
    flexFlow: "column",
    justifyContent: "start",
    rowGap: "1rem",
  },
  testBorder: {
    border: "dashed 1px var(--primary-700)",
  },
};

export default ItemDetail;
