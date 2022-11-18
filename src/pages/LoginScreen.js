import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Row, Col, Form, Button } from "react-bootstrap";
import Loader from "../components/Loader.js";
import Message from "../components/Message.js";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";

// imports happen above
const LoginScreen = () => {
  // to grab form inputs
  const [email, setEmail] = useState("  ");
  const [password, setPassword] = useState("  ");

  return <div>LoginScreen</div>;
};

export default LoginScreen;
