import React from "react";
import FormContainer from "../components/FormContainer";
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
import { register } from "../actions/userActions";

const Register = () => {
  ////////////////// url logic////////////////////

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  // //////////grab inputs from the form ///////////////////////////////////
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("password do not match");
    } else {
      dispatch(register(email, password));

      console.log("submitted");
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect); //this is to navigate user if they are logged in
    }
  }, [userInfo, redirect]);

  return (
    <FormContainer>
      <h1>Sign in to your account</h1>
      {message && <Message variant="danger">{message}</Message>}
      {/* {error && <Message variant="danger">{error}</Message>} */}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="confirmPassword">
          <Form.Label> Confirm Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Re-enter your password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>
        <Button className="mt-3" type="submit" variant="primary">
          Register
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          Already have an account
          <Link
            className="mx-2"
            to={redirect ? `/login?redirect=${redirect}` : "/login"}
          >
            Sign in
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default Register;
