import React, { useState } from "react";
import { Link } from "react-router-dom";

function EditProduct({ match, products, setProducts }) {
  const id = parseInt(match.params.id);
  const product = products.find((p) => p.id === id);

  const [updatedProduct, setUpdatedProduct] = useState(product);

  const handleSave = () => {
    const updatedList = products.map((p) =>
      p.id === id ? updatedProduct : p
    );
    setProducts(updatedList);
  };

  return (
    <div>
      <h2>Edit Product</h2>

      <img src={product.image} width="150" alt={product.name} />

      <input
        className="form-control"
        value={updatedProduct.price}
        onChange={(e) =>
          setUpdatedProduct({
            ...updatedProduct,
            price: Number(e.target.value)
          })
        }
      />

      <button
        data-cy="save-btn"
        className="float-right"
        onClick={handleSave}
      >
        Save
      </button>

      <Link to="/admin">Back</Link>
    </div>
  );
}

export default EditProduct;
