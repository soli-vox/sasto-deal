import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Login from "./components/admin/auth/Login";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { ToastContainer } from "react-toastify";
import Dashboard from "./components/admin/Dashboard";
import { AdminAuthCheck } from "./components/admin/middleware/AdminAuthCheck";
import { default as ShowCategory } from "./components/admin/category/Show";
import { default as CreateCategory } from "./components/admin/category/Create";
import { default as EditCategory } from "./components/admin/category/Edit";

import { default as ShowBrand } from "./components/admin/brand/Show";
import { default as CreateBrand } from "./components/admin/brand/Create";
import { default as EditBrand } from "./components/admin/brand/Edit";

import { default as ShowProduct } from "./components/admin/product/Show";
import { default as CreateProduct } from "./components/admin/product/Create";
import { default as EditProduct } from "./components/admin/product/Edit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />

          <Route path="/admin/login" element={<Login />} />
          <Route
            path="/admin/dashboard"
            element={
              <AdminAuthCheck>
                <Dashboard />
              </AdminAuthCheck>
            }
          />
          <Route
            path="/admin/category/show"
            element={
              <AdminAuthCheck>
                <ShowCategory />
              </AdminAuthCheck>
            }
          />
          <Route
            path="/admin/category/create"
            element={
              <AdminAuthCheck>
                <CreateCategory />
              </AdminAuthCheck>
            }
          />
          <Route
            path="/admin/category/edit/:id"
            element={
              <AdminAuthCheck>
                <EditCategory />
              </AdminAuthCheck>
            }
          />

          <Route
            path="/admin/brand/show"
            element={
              <AdminAuthCheck>
                <ShowBrand />
              </AdminAuthCheck>
            }
          />

          <Route
            path="/admin/brand/create"
            element={
              <AdminAuthCheck>
                <CreateBrand />
              </AdminAuthCheck>
            }
          />
          <Route
            path="/admin/brand/edit/:id"
            element={
              <AdminAuthCheck>
                <EditBrand />
              </AdminAuthCheck>
            }
          />

          <Route
            path="/admin/product/show"
            element={
              <AdminAuthCheck>
                <ShowProduct />
              </AdminAuthCheck>
            }
          />

          <Route
            path="/admin/product/create"
            element={
              <AdminAuthCheck>
                <CreateProduct />
              </AdminAuthCheck>
            }
          />
          <Route
            path="/admin/product/edit/:id"
            element={
              <AdminAuthCheck>
                <EditProduct />
              </AdminAuthCheck>
            }
          />




        </Routes>
      </BrowserRouter>
      <ToastContainer theme="dark" />
    </>
  );
}

export default App;
