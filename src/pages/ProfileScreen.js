import React from "react";
import { LinkuseSelector, useLocation, useNavigate } from "react-router-dom";
import { Row, Col, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { getUserDetails } from "../actions/userActions";

// all imports happen above
const ProfileScreen = () => {
  // variable to handle the routing logic
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.UserDetails);
  return (
    <Row>
      <Col md={3}>
        <h2>User profile</h2>
      </Col>
      <Col md={9}>My orders</Col>
    </Row>
  );
};

export default ProfileScreen;
