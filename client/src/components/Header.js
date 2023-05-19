import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Container>
        <Row>
          <Col sm={12} lg={6}>
            <Link to="/">
              <h1 className="my-name">GameNight</h1>
            </Link>
          </Col>
          <Col className="nav-col" xs={12} sm={4} lg={2}>
            <Link className="nav-option">My GameNights</Link>
          </Col>
          <Col className="nav-col" xs={12} sm={4} lg={2}>
            <Link className="nav-option" to="/login">
              Log In
            </Link>
          </Col>
          <Col className="nav-col" xs={12} sm={4} lg={2}>
            <Link className="nav-option" to="/signup">
              Sign Up
            </Link>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
