import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getItem } from "../../services/productsService";

import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  let { id } = useParams();
  const [productInfo, setProductInfo] = useState({});

  useEffect(() => {
    getItem(id).then((data) => {
      setProductInfo(data);
      console.log(`"${data.title}" retrieved from productsService`);
    });
  }, [id]);

  return (
    <>
      {Object.keys(productInfo).length !== 0 ? (
        <ItemDetail product={productInfo} />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default ItemDetailContainer;
