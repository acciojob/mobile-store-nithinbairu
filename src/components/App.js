import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import AdminPanel from "./AdminPanel";
import EditProduct from "./EditProduct";

import { mobiles as initialData } from "./data";

function App() {
  const [products, setProducts] = useState(initialData);

  return (
    <BrowserRouter>
      <div style={{ padding: "20px" }}>
        <nav>
          <Link to="/">Home</Link> |
          <Link to="/admin"> Admin Panel</Link>
        </nav>

        <Routes>
          <Route path="/" element={<ProductList products={products} />} />

          <Route
            path="/products/:id"
            element={<ProductDetails products={products} />}
          />

          <Route
            path="/admin"
            element={<AdminPanel products={products} setProducts={setProducts} />}
          />

          <Route
            path="/admin/edit/:id"
            element={<EditProduct products={products} setProducts={setProducts} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
