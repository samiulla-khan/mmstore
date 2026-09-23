import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import CategoryPage from "../pages/CategoryPage";
import ProductDetail from "../pages/ProductDetail";
import Search from "../pages/Search";
import Cart from "../pages/Cart";
import Login from "../pages/Login";

const AppRoutes = ({ setIsLoggedIn}) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/category/:category"
        element={<CategoryPage />}
      />

      <Route
        path="/product/:id"
        element={<ProductDetail />}
      />

      <Route
        path="/search"
        element={<Search />}
      />

      <Route
        path="/login"
        element={<Login setIsLoggedIn={setIsLoggedIn} />}
      />

      <Route
        path="/cart"
        element={<Cart />}
      />
    </Routes>
  );
};

export default AppRoutes;