import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import AdminPanel from "./AdminPanel";
import EditProduct from "./EditProduct";
import { moblies } from "./data";

export default function App() {
const [products, setProducts] = useState(moblies);

return ( <Router>
<div style={{ padding: "20px" }}> <h1>Mobile Store</h1>


    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/admin">Admin Panel</Link>
    </nav>

    <hr />

    <Switch>
      <Route exact path="/"
        render={()=><ProductList products={products} />}>
      </Route>

      <Route
  path="/products/:id"
  render={(routeProps) => (
    <ProductDetails {...routeProps} products={products} />
  )}
/>


      <Route exact path="/admin"
        render={()=><AdminPanel products={products} setProducts={setProducts}/>} />
      

      <Route path="/admin/edit/:id"
        render={(routeProps)=><EditProduct {...routeProps} products={products} setProducts={setProducts} />}></Route>
      
    </Switch>
  </div>
</Router>


);
}
