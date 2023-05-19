import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "google-fonts";

function Header() {
  return (
    <header>
      <Container>
        <Row>
          <Col sm={12} lg={5}>
            <Link className="homeLink" to="/">
              <h1 className="app-name">GameNight</h1>
            </Link>
          </Col>
          <Col className="nav-col option" xs={12} sm={12} lg={7}>
            <Link className="nav-option">My GameNights</Link>
            <Link className="nav-option" to="/login">
              Log In
            </Link>
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
