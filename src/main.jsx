import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import HeroSection from "./components/Hero/index.jsx";
import Products from "./components/Products/index.jsx";
import Category from "./components/Category/index.jsx";
import Contact from "./components/Contact/index.jsx";
import Navbar from "./components/Navbar/index.jsx";
import ProductDetails from "./components/Products/ProductDetails/index.jsx";
import Cart from "./components/Navbar/cart/index.jsx";
import Register from "./components/Navbar/register/index.jsx";
import CategoryDetails from "./components/Category/categorydetails/index.jsx";
import Sidebar from "./components/Category/sidebar/index.jsx";
import Footer from "./components/Contact/footer/index.jsx";
//redux
import { Provider } from "react-redux";
import store from "./redux/store";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="" element={<App />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<HeroSection />} />
          <Route path="/product" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/category" element={<Category />} />
          <Route path="/category/:id" element={<CategoryDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </StrictMode>
  </Provider>
);
