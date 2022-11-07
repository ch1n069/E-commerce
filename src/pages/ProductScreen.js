import React from "react";
// import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";
import products from "../Products";
import { Link, useParams } from "react-router-dom";

// imports happen above
const ProductScreen = (props) => {
  const params = useParams();
  const product = products.find((p) => p._id === params.id);
  return (
    <div>
      <h2>{product.name}</h2>
    </div>
  );
};

export default ProductScreen;
