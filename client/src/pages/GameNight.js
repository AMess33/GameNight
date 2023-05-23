import React, { useEffect } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useQuery } from '@apollo/client';
import { useParams } from "react-router-dom";

import "google-fonts";

import Widgets from "../components/Widgets";
import Game from '../components/SingleGameNight';
import { QUERY_GAME_NIGHT } from '../utils/queries';

const GameNight = (props) => {
  
  const { gameNightId } = useParams();

  const { loading, error, data } = useQuery(QUERY_GAME_NIGHT, {
    variables: { gameNightId },
  });

  error && console.error(error);

  let games = [];
  if (loading) {
    return "Loading..."
  }
  if (error) {
    return `Error! ${error.message}`
  }

  console.log(data.gameNight.games);
  return (
    <Container>
      <Row>
        <Col className="gameSide" lg={10}>
          <h2 className="gameNightName">{"Game Night Title" && data?.gameNight.title}</h2>

          <div className="gamesList">
            {data.gameNight.games.map((game) => (
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
