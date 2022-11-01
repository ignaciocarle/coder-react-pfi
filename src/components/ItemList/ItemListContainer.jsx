import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getAllProducts } from "../../services/productsService";

import { DotSpinner } from "@uiball/loaders";
import { MainContainer } from "../UI/Containers";

import ItemList from "./ItemList";

function ItemListContainer() {
  let { categoryId } = useParams();
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getAllProducts(categoryId?.toLowerCase()).then((data) => {
      setProductList(data);
    });
  }, [categoryId]);

  return (
    <>
      <MainContainer>
        {categoryId && <h1>{categoryId}</h1>}
        {productList.length !== 0 ? (
          <ItemList productList={productList} />
        ) : (
          <DotSpinner size={70} speed={0.5} color="var(--brand-primary)" />
        )}
      </MainContainer>
    </>
  );
}

export default ItemListContainer;
