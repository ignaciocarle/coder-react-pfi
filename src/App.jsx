import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import Spacer from "./components/UI/Spacer";

function App() {
  const msg = "Bienvenidos a la tienda online de Punto de Apoyo";

  return (
    <>
      <NavBar />
      <main style={styles.main}>
        <ItemListContainer greeting={msg} />
        <Spacer />
        <ItemDetailContainer />
      </main>
    </>
  );
}

const styles = {
  main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    padding: "1.5rem 3rem 0",
  },
  spacer: {
    //SACAR ESTO CUANDO LLEVE LOS ITEMDETAIL A SU PROPIA PAG
    marginTop: "3rem",
  },
};

export default App;
