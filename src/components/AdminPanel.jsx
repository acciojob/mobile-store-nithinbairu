import React, { useState } from "react";
import { Link } from "react-router-dom";

function AdminPanel({ products, setProducts }) {
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: ""
  });

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const handleAdd = () => {
    const id = products.length + 1;
    setProducts([
      ...products,
      { id, ...newProduct, price: Number(newProduct.price) }
    ]);

    setNewProduct({ name: "", description: "", price: "", image: "" });
  };

  return (
    <div>
      <h2>Admin Panel</h2>

      <h3>Add Product</h3>

      <input
        className="form-control"
        placeholder="Name"
        value={newProduct.name}
        onChange={(e) =>
          setNewProduct({ ...newProduct, name: e.target.value })
        }
      />

      <input
        className="form-control"
        placeholder="Description"
        value={newProduct.description}
        onChange={(e) =>
          setNewProduct({ ...newProduct, description: e.target.value })
        }
      />

      <input
        className="form-control"
        placeholder="Image URL"
        value={newProduct.image}
        onChange={(e) =>
          setNewProduct({ ...newProduct, image: e.target.value })
        }
      />

      <input
        className="form-control"
        placeholder="Price"
        value={newProduct.price}
        onChange={(e) =>
          setNewProduct({ ...newProduct, price: e.target.value })
        }
      />

      <button onClick={handleAdd}>Add</button>

      <h3>Product List</h3>
      {products.map((p) => (
        <div key={p.id}>
          <strong>{p.name} - ₹{p.price}</strong>

          <Link className="float-right" to={`/admin/edit/${p.id}`}>
            Edit
          </Link>

          <button
            className="float-right"
            onClick={() => handleDelete(p.id)}
          >
            Delete
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default AdminPanel;
