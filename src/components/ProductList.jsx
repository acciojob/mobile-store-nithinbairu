import React from "react";
import { Link } from "react-router-dom";

function ProductList({ products }) {
  // console.log(products);
  return (
    <div>
      <h2>Mobile Store</h2>

      <div className="product-list">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <img src={p.image} width="120" alt={p.name} />
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>

            <Link to={`/products/${p.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
