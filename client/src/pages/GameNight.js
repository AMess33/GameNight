import React from "react";
import Game from "../components/Game";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "google-fonts";
import Widgets from "../components/Widgets";

const GameNight = (props) => {
  // hard code test data for games
  // needs to be replaced with game data from db
  const gameNightName = "Thursday Night Throwdown";

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
    {
      title: "Catan",
      notes: "Jane thinks Al has 2 VPs in hand!",
      table: [],
    },
    {
      title: "Candyland",
      notes: "Why do we play this again?",
      table: [],
    },
  ];

  return (
    <Container>
      <Row>
        <Col className="gameSide" lg={10}>
          <h2 className="gameNightName">{gameNightName}</h2>

          <div className="gamesList">
            {games.map((game) => (
              <Game game={game} />
            ))}
          </div>
        </Col>
        <Col lg={2}>
          <div className="widgets">
            <Widgets />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default GameNight;
