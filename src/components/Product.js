import React from "react";
import { Card } from "react-bootstrap";

const Product = (props) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`product/${props.product._id}`}>
        <Card.Img src={props.product.image} />
      </a>
    </Card>
  );
};

export default Product;
