import React, { useEffect, useState } from "react";
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";
import products from "../Products";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/Rating";
import axios from "axios";

// imports happen above
const ProductScreen = ({ match }) => {
  //   const params = useParams();

  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`/api/products/${id}`);
      setProduct(data);
    }
    fetchData();
  }, []);

  // const product = products.find((p) => p._id === id);
  return (
    <div>
      <h2>{product.name}</h2>
      <Link to="/" className="btn btn-light my-3">
        Go back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} />
          <p>{product.image}</p>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h4>{product.name}</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
                color="#f8e825"
              />
            </ListGroup.Item>
            <ListGroup.Item>
              <p>{product.description}</p>
            </ListGroup.Item>
            <ListGroup.Item>Price $ : {product.price}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price </Col>
                  <Col>
                    <strong>{product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status </Col>
                  <Col>
                    {product.countInStock > 0 ? "instock" : "out of stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  disabled={product.countInStock == 0}
                  className="btn-block"
                  type="button"
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductScreen;
