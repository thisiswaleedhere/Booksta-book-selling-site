import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/CartPage";

function App() {


  const [ppScroll, setPpScroll] = useState(false);
  const [tcScroll, setTcScroll] = useState(false);

  return (

    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/company" element={<MainPage tcScroll={tcScroll} ppScroll={ppScroll} setPpScroll={setPpScroll} setTcScroll={setTcScroll} />} exact />
        <Route path="/" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer setPpScroll={setPpScroll} setTcScroll={setTcScroll} />

    </BrowserRouter>

  );
}

export default App;
