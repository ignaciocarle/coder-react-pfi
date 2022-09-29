import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getAllProducts } from "../../services/productsService";

import ItemList from "./ItemList";

function ItemListContainer() {
  const { id } = useParams();
  const [productList, setProductList] = useState("");

  useEffect(() => {
    getAllProducts(id).then((data) => {
      setProductList(data);
      console.log("products retrieved from productsService");
    });
  }, [id]);

  return (
    <>
      {productList ? (
        <ItemList productList={productList} />
      ) : (
        <p style={{ marginTop: "1.5rem" }}>Loading...</p>
      )}
    </>
  );
}

export default ItemListContainer;
