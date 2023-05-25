import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import "google-fonts";

import Widgets from "../components/Widgets";
import { Game, AddGameForm } from "../components/SingleGameNight";
import { QUERY_GAME_NIGHT } from "../utils/queries";

const GameNight = (props) => {
  const { gameNightId } = useParams();

  const { loading, error, data } = useQuery(QUERY_GAME_NIGHT, {
    variables: { gameNightId },
  });

  if (loading) {
    return "Loading...";
  }
  if (error) {
    return `Error! ${error.message}`;
  }

  return (
    <Container>
      <Row>
        {data && (
          <>
            <Col className="gameSide" lg={10}>
              <h2 className="gameNightName">
                {data.gameNight && data.gameNight.title}
              </h2>
              <p>{data.gameNight && data.gameNight.description}</p>
              <div className="gamesList">
                <AddGameForm
                  gameNightId={data.gameNight && data.gameNight._id}
                />
                {data.gameNight &&
                  data.gameNight.games.map((game) => (
                    <Game key={game._id} game={game} />
                  ))}
              </div>
            </Col>
            <Col lg={2}>
              <div className="widgets">
                <Widgets />
              </div>
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};
export default GameNight;
