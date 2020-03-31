import React from "react";
import { useParams } from "react-router-dom";
import productsList from "./productsList";

function ProductDetail() {
  const { productId } = useParams();
  const product = productsList.find(item => item.id == productId);
  console.log(productId);

  return (
    <div>
      <h1>{product.name}</h1>
      <h2>${product.price.toFixed(2)}</h2>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetail;
