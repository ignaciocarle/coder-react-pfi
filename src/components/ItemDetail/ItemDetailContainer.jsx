import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getItem } from "../services/productsService";
import ItemDetail from "./ItemDetail";
import CircularProgress from "@mui/joy/CircularProgress";

function ItemDetailContainer() {
  let { id } = useParams();
  const [productInfo, setProductInfo] = useState("");

  useEffect(() => {
    getItem(id).then((data) => {
      setProductInfo(data);
      console.log(`"${data.title}" retrieved from productsService`);
    });
  }, [id]);

  return (
    <>
      {productInfo ? (
        <ItemDetail product={productInfo} />
      ) : (
        <CircularProgress />
      )}
    </>
  );
}

export default ItemDetailContainer;
