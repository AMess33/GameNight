import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

function Header() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header>
      <Container>
        <Row>
          <Col sm={6} lg={8}>
            <Link className="homeLink" to="/">
              <h1 className="app-name">GameNight</h1>
            </Link>
          </Col>
          <Col className="nav-col option" xs={12} sm={6} lg={4}>
            {Auth.loggedIn() ? (
              <>
                <Link className="nav-option" to="/me">
                  My GameNights
                </Link>
                <Link className="nav-option" onClick={logout} to="/">
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link className="nav-option" to="/login">
                  Log In
                </Link>
                <Link className="nav-option" to="/signup">
                  Sign Up
                </Link>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
