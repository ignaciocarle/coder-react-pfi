import React, { useState, useEffect } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

function ItemListContainer({ greeting }) {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      mock(mockData)
        .then((data) => {
          setProductList(data);
          console.log("products retrieved from mockData");
        })
        .catch(() => {
          console.log("error retrieving products");
        });
    }, 2000);
  }, []);

  return (
    <main style={styles.main}>
      <h3>{greeting}</h3>
      <ItemCount stock="10" initial="1" onAdd={onAdd} />
      <ItemList productList={productList} />
    </main>
  );
}

const mockData = [
  {
    id: 1,
    title: "Cuaderno de Comunicaciones Secundario",
    description: "Cuadernos de comunicados de 56 páginas",
    price: 130,
    pictureUrl: "https://puntoescolar.com/wp-content/uploads/2020/10/foto1.jpg",
  },
  {
    id: 2,
    title: "Cuaderno de Comunicaciones Primario",
    description: "Cuadernos de comunicados de 48 páginas",
    price: 118,
    pictureUrl: "https://puntoescolar.com/wp-content/uploads/2020/10/foto1.jpg",
  },
  {
    id: 3,
    title: "Cuaderno de Comunicaciones Inicial",
    description: "Cuadernos de comunicados de 36 páginas",
    price: 96,
    pictureUrl: "https://puntoescolar.com/wp-content/uploads/2020/10/foto1.jpg",
  },
  {
    id: 4,
    title: "Cuaderno de Comunicaciones Inicial",
    description: "Cuadernos de comunicados de 36 páginas",
    price: 96,
    pictureUrl: "https://puntoescolar.com/wp-content/uploads/2020/10/foto1.jpg",
  },
  {
    id: 5,
    title: "Cuaderno de Comunicaciones Inicial",
    description: "Cuadernos de comunicados de 36 páginas",
    price: 96,
    pictureUrl: "https://puntoescolar.com/wp-content/uploads/2020/10/foto1.jpg",
  },
];

const mock = (data) =>
  new Promise((res, rej) => {
    res(data);
  });

function onAdd(count) {
  console.log(`Se agregaron ${count} items al carrito.`);
}

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
