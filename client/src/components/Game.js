import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "google-fonts";
import Widgets from "./Widgets";

function Game() {
  // hard code test data for game
  // needs to be replaced with game data from db
  const games = [
    {
      title: "Yahtzee",
      notes: "Jessica is the yahtzee GOAT",
      table: [],
    },
    {
      title: "Monopoly",
      notes:
        "Joe agreed to pay double on Sam's properties in exchange for Park Place",
      table: [],
    },
  ];

  return (
    <Container className="games">
      <div className="gamesSection">
        {games.map((game) => (
          <h2>{game.title}</h2>
          // add textarea for notes
          // add table (create table component)
        ))}
      </div>
      <div className="widgetsSection">
        <Widgets />
      </div>
    </Container>
  );
}

export default Game;
