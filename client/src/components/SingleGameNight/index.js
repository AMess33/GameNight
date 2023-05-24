import React from "react";
import Container from "react-bootstrap/Container";
import "google-fonts";

import Table from './Table';
import Note from './Note';

function Game({ game }) {
  return (
    <>
      <Container>
        <div className="game">
          <h2 className="gameTitle margins">{game.name}</h2>
          <Table game={game} />
          <Note game={game} />
        </div>
      </Container>
    </>
  );
}

export default Game;