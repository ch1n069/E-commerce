import React from "react";
import { Card } from "react-bootstrap";

const Product = (props) => {
  return (
    <Card className="my-3 p-3 rounded">
      <h1>{props.product.name}</h1>
    </Card>
  );
};

export default Product;
