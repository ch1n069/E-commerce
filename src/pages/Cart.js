import React, { useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { Message } from "../components/Message";
// import happen above
const Cart = () => {
  const { id } = useParams();
  const productId = id;
  const location = useLocation();
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  console.log("qty :", qty);

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log(cartItems);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  console.log(cartItems);

  return <div>Cart page</div>;
};

export default Cart;
