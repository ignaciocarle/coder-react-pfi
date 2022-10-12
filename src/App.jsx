import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CartProvider from "./context/CartContext";

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import Cart from "./components/Cart/Cart";

function App() {
  const msg = "Bienvenidos a la tienda online de Punto de Apoyo";

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <main>
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
              <Route
                path="/category/:categoryId"
                element={<ItemListContainer />}
              />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
