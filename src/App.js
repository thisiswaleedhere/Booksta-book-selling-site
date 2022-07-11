import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/CartPage";

function App() {


  return (

    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/" element={<MainPage />} exact />
        <Route path="/books" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />

    </BrowserRouter>

  );
}

export default App;
