import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getAllProducts } from "../services/productsService";

import ItemList from "./ItemList";
import Spacer from "../UI/Spacer";

function ItemListContainer() {
  const { id } = useParams();
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getAllProducts(id).then((data) => {
      setProductList(data);
      console.log("products retrieved from productsService");
    });
  }, [id]);

  return (
    <>
      <ItemList productList={productList} />
      <Spacer />
    </>
  );
}

export default ItemListContainer;
