import React from "react";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  redirect,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Row, Col, Form, Button } from "react-bootstrap";
import Loader from "../components/Loader.js";
import Message from "../components/Message.js";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "../actions/userActions";
import FormContainer from "../components/FormContainer.js";

// imports happen above
const LoginScreen = ({ history }) => {
  // to grab form inputs
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(Login(email, password));

    console.log("submitted");
  };
  useEffect(() => {
    if (userInfo) {
      navigate(redirect); //this is to navigate user if they are logged in
    }
  }, [userInfo, redirect]);

  return (
    <FormContainer>
      <h1>Sign in to your account</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>
        <Button className="mt-3" type="submit" variant="primary">
          Sign in
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          New customer ?{" "}
          <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;
