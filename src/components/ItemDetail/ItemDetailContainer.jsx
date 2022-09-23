import React, { useEffect, useState } from "react";
import { getItem } from "../services/productsService";
import ItemDetail from "./ItemDetail";
/*
 */
function ItemDetailContainer() {
  const [productInfo, setProductInfo] = useState("");

  useEffect(() => {
    //Paso un id por parametro para traer un solo item
    getItem(1).then((data) => {
      setProductInfo(data);
      console.log("single product retrieved from productsService");
    });
  }, []);
  return (
    <>{productInfo ? <ItemDetail product={productInfo} /> : <p>Cargando</p>}</>
  );
}

export default ItemDetailContainer;
