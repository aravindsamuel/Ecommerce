import React from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import OurStore from "./pages/OurStore";
import CompareProduct from "./pages/CompareProduct";
import WishList from "./pages/WishList";
import Login from "./pages/Login";
import Forgotpassword from "./pages/Forgotpassword";
import Signup from "./pages/Signup";
import Resetpassword from "./pages/Resetpassword";
import SingleBlog from "./pages/SingleBlog";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Watch from "./pages/Watch";
import Laptop from "./pages/Laptop";
import Tablet from "./pages/Tablet";
import Headphone from "./pages/Headphone";
import Earbud from "./pages/Earbud";
import { CartProvider } from "./CartContext";
import { WishlistProvider } from "./WishListContext";
import { CompareProductProvider } from "./CompareProductContext";

const App = () => {
  return (
    <>
      <CartProvider>
        <WishlistProvider>
          <CompareProductProvider>
            <HashRouter>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="/store" element={<OurStore />} />
                  <Route path="/product/:id" element={<SingleProduct />} />
                  <Route path="/watch" element={<Watch />} />
                  <Route path="/laptop" element={<Laptop />} />
                  <Route path="/tablet" element={<Tablet />} />
                  <Route path="/headphone" element={<Headphone />} />
                  <Route path="/earbud" element={<Earbud />} />
                  <Route path="/blogs/:id" element={<SingleBlog />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/compareproducts" element={<CompareProduct />} />
                  <Route path="/wishlist" element={<WishList />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/forgot-password" element={<Forgotpassword />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/reset-password" element={<Resetpassword />} />
                </Route>
              </Routes>
            </HashRouter>
          </CompareProductProvider>
        </WishlistProvider>
      </CartProvider>
    </>
  );
};

export default App;
