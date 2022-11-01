import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CartProvider from "./context/CartContext";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import OrderContainer from "./components/Checkout/CheckOutContainer";
import ThankYou from "./components/Checkout/ThankYou";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/category/:categoryId"
                element={<ItemListContainer />}
              />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/place-order" element={<OrderContainer />} />
              <Route path="/thank-you/:orderId" element={<ThankYou />} />
              <Route path="/*" element={<PageNotFound />} />
            </Routes>
          </main>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
