import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Header({ display, setDisplay }) {
  return (
    <header>
      <Container>
        <Row>
          <Col sm={12} lg={6}>
            <h1 className="my-name">GameNights</h1>
          </Col>
          <Col className="nav-col" xs={12} sm={4} lg={2}>
            <p className="nav-option" onClick={() => setDisplay("#")}>
              My GameNights
            </p>
          </Col>
          <Col className="nav-col" xs={12} sm={4} lg={2}>
            <p className="nav-option" onClick={() => setDisplay("#")}>
              Log In
            </p>
          </Col>
          <Col className="nav-col" xs={12} sm={4} lg={2}>
            <p className="nav-option" onClick={() => setDisplay("#")}>
              Sign Up
            </p>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
