import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";

import ItemCount from "./ItemCount";

function ItemDetail({ product }) {
  const { title, description, price, image } = product;
  const [displayItemCount, setDisplayItemCount] = useState(true);
  const { addItem } = useContext(CartContext);

  const onAdd = (count) => {
    setDisplayItemCount(false);
    addItem(product, count);
  };

  return (
    <article style={s.article}>
      <img style={s.img} src={image} alt={title} />
      <div style={s.details}>
        <h1>{title}</h1>
        <h3>$ {price}</h3>
        <p style={s.description}>{description}</p>
        {displayItemCount ? (
          <ItemCount stock="10" initial="1" onAdd={onAdd} />
        ) : (
          <Link to="/cart">
            <button>Finalizar Compra</button>
          </Link>
        )}
      </div>
    </article>
  );
}
const s = {
  article: {
    padding: "1.5rem 10% 0",
    width: "100%",
    height: "fit-content",
    display: "flex",
    flexFlow: "row",
    justifyContent: "center",
    alignItems: "start",
    columnGap: "3rem",
  },
  img: {
    maxWidth: "450px",
    maxHeight: "450px",
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
