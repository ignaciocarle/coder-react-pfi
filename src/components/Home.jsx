import React from "react";
import ItemListContainer from "./ItemList/ItemListContainer";

function Home() {
  const msg = "Bienvenidos a la tienda online de Punto de Apoyo";

  return (
    <>
      <h1 style={{ marginBottom: "3rem" }}>{msg}</h1>
      <ItemListContainer />
    </>
  );
}

export default Home;
