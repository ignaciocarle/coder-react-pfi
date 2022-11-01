import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getItem } from "../../services/productsService";

import { DotSpinner } from "@uiball/loaders";
import { MainContainer } from "../UI/Containers";

import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  let { id } = useParams();
  const [productInfo, setProductInfo] = useState({});

  useEffect(() => {
    getItem(id).then((data) => {
      setProductInfo(data);
    });
  }, [id]);

  return (
    <MainContainer>
      {Object.keys(productInfo).length === 0 ? (
        <div style={{ marginTop: "4.5rem" }}>
          <DotSpinner size={70} speed={0.5} color="var(--brand-primary)" />
        </div>
      ) : productInfo.notFound ? (
        <div style={{ marginTop: "4.5rem" }}>
          <h1>No se encontró el producto seleccionado</h1>
        </div>
      ) : (
        <ItemDetail product={productInfo} />
      )}
    </MainContainer>
  );
}

export default ItemDetailContainer;
