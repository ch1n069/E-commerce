import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Form,
  ListGroupItem,
  Card,
} from "react-bootstrap";
import products from "../Products";
import { Link, useParams, useNavigate } from "react-router-dom";
import Rating from "../components/Rating";
import Loader from "../components/Loader";

import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../actions/ProductActions";
import Message from "../components/Message";
// import axios from "axios";

// imports happen above

const ProductScreen = ({ match }) => {
  const navigate = useNavigate();
  //   const params = useParams();

  // const [product, setProduct] = useState([]);
  const [qty, setQty] = useState(1);
  // above is the state of the quantity
  const { id } = useParams();

  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    // async function fetchData() {
    //   const { data } = await axios.get(`/api/products/${id}`);
    //   setProduct(data);
    // }
    // fetchData();
    dispatch(listProductDetails(id));
  }, [dispatch, match]);

  const addToCartHandler = () => {
    console.log(`item: ${id}`);
    navigate(`/cart/${id}?qty=${qty}`);
  };

  // const product = products.find((p) => p._id === id);
  return (
    <div>
      <h2>{product.name}</h2>
      <Link to="/" className="btn btn-light my-3">
        Go back
      </Link>
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
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
                {product.countInStock > 0 && (
                  <ListGroupItem>
                    <Row>
                      <Col>qty</Col>
                      <Col xs="auto" className="my-1">
                        <Form.Control
                          as="select"
                          value={qty}
                          onChange={(e) => {
                            setQty(e.target.value);
                          }}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroupItem>
                )}
                <ListGroup.Item>
                  <Button
                    onClick={addToCartHandler}
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
      )}
    </div>
  );
};

export default ProductScreen;
