import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer";
function App() {
  const msg = "Bienvenidos a la tienda online de Punto de Apoyo";

  return (
    <>
      <NavBar />
      <ItemListContainer greeting={msg} />
    </>
  );
}

export default App;
