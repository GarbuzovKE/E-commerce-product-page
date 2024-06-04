import { useState } from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <Product />
      </CartProvider>
    </>
  );
}

export default App;
