import React from "react";
import { Link, useParams } from "react-router-dom";
import productsList from "./productsList";

function Products() {
  const products = productsList.map(product => (
    <div key={product.id}>
      <h3>
        <Link to={`/products/${product.id}`}>{product.name}</Link> -{" "}
        {product.price}
      </h3>
    </div>
  ));

  return <div>{products}</div>;
}

export default Products;
