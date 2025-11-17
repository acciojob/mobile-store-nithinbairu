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
            <a href={`/admin/edit/${product.id}`}>
              <div className="row">
                <div className="col-4">
                  <img src={product.image} width="100" alt={product.name} />
                </div>
                <div className="col-6">
                  <h4>{product.name}</h4>
                  <p>₹{product.price}</p>
                </div>
              </div>
            </a>

            {/* DELETE BUTTON --- MUST MATCH Cypress selector */}
            <button
              className="float-right"
              onClick={() => deleteProduct(product.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      <Link to="/">
        <button className="btn">Back</button>
      </Link>
    </div>
  );
}

export default AdminPanel;
