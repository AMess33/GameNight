import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "google-fonts";
import Widgets from "./Widgets";
import Table from "./Table";

function Game({ game }) {
  return (
    <Container>
      <div className="game">
        <h2 className="gameTitle margins">{game.name}</h2>
        <textarea className="gameNotes">{game.notes}</textarea>
      </div>
    </Container>
  );
}

export default Game;
