import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import products from "../Products.js";

const Home = () => {
  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            {product.name}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
