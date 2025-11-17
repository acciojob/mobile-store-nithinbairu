import React from "react";
import { Link } from "react-router-dom";

function ProductDetails({ match, products }) {
  const id = parseInt(match.params.id);
  const product = products.find((p) => p.id === id);

  if (!product) return <h2>Product Not Found</h2>;

  return (
    <div>
      <button className="btn">
        <Link to="/">Back</Link>
      </button>

      <h2>{product.name}</h2>
      <img src={product.image} width="200" alt={product.name} />
      <p>{product.description}</p>
      <h3>₹{product.price}</h3>
    </div>
  );
}

export default ProductDetails;
