import React, { useEffect, useState } from "react";
import { getAllProducts } from "../services/productsService";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

function ItemListContainer({ greeting }) {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getAllProducts().then((data) => {
      setProductList(data);
      console.log("products retrieved from productsService");
    });
  }, []);

  const onAdd = (count) => {
    console.log(`Se agregaron ${count} items al carrito.`);
  };

  return (
    <>
      <h3>{greeting}</h3>
      <ItemCount stock="10" initial="1" onAdd={onAdd} />
      <ItemList productList={productList} />
    </>
  );
}

export default ItemListContainer;
