import React from "react";
import { Link } from "react-router-dom";

function AdminPanel({ products, setProducts }) {

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Panel</h2>

      {products.map((product) => (
        <div className="col-12" key={product.id}>
          <div>
            <Link to={`/admin/edit/${product.id}`}>
              <div className="row">
                <div className="col-4">
                  <img src={product.image} width="120" alt={product.name} />
                </div>

                <div className="col-6">
                  <h3>{product.name}</h3>
                  <p>₹{product.price}</p>
                </div>
              </div>
            </Link>

            <button
              data-cy={`delete-btn-${product.id}`}
              className="float-right"
              onClick={() => deleteProduct(product.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdminPanel;
