import React, { useEffect, useState } from "react";
import { getItem } from "../services/productsService";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer({ productId }) {
  const [productInfo, setProductInfo] = useState("");

  useEffect(() => {
    getItem(productId).then((data) => {
      setProductInfo(data);
      console.log("single product retrieved from productsService");
    });
  }, [productId]);

  return (
    <>{productInfo ? <ItemDetail product={productInfo} /> : <p>Cargando</p>}</>
  );
}

export default ItemDetailContainer;
