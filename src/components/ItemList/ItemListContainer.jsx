import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getAllProducts } from "../../services/productsService";

import ItemList from "./ItemList";

function ItemListContainer() {
  let { categoryId } = useParams();
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getAllProducts(categoryId).then((data) => {
      setProductList(data);
    });
  }, [categoryId]);

  return (
    <>
      {productList.length !== 0 ? (
        <ItemList productList={productList} />
      ) : (
        <p style={{ marginTop: "1.5rem" }}>Loading...</p>
      )}
    </>
  );
}

export default ItemListContainer;
