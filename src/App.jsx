import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import Cart from "./components/Cart/Cart";

function App() {
  const msg = "Bienvenidos a la tienda online de Punto de Apoyo";

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <main style={styles.main}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <h3>{msg}</h3>
                  <ItemListContainer />
                </>
              }
            />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </BrowserRouter>
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
};

export default App;
