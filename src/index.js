import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { Home } from "./pages/Home";
import { ProductList } from "./components/ProductList";
import { ProductDetails } from "./components/ProductDetails";
import { Footer } from "./components/Footer";
import { MyNavbar } from "./components/MyNavbar";
import { CartProvider } from "./CartContext";
import { Cart } from "./pages/Cart";
import { About } from "./pages/About";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:parameter" element={<ProductList />} />
        <Route path="/products/:parameter/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    <Footer/>
  </CartProvider>
);
