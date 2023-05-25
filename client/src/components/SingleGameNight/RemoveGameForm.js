import React from "react";
import Button from "react-bootstrap/Button";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import { useMutation } from "@apollo/client";
import { REMOVE_GAME } from "../../utils/mutations";

const RemoveGameForm = ({ game }) => {
  const [removeGame] = useMutation(REMOVE_GAME);

  const handleClick = (e) => {
    const yesRemove = window.confirm(`OK to delete ${game.name}?`);
    if (yesRemove) {
      try {
        removeGame({ variables: { gameId: game._id } });
      } catch (err) {
        console.error(err);
      }
    }
    return;
  };

  return (
    <div>
      <div className="float-end">
        <OverlayTrigger
          key="left"
          placement="left"
          overlay={
            <Tooltip id="tooltip-left">
              {`Delete ${game.name}`}
            </Tooltip>
          }
        >
          <Button variant="outline-light" size="sm" onClick={handleClick}>
            <i className="bi bi-trash"></i>
          </Button>
        </OverlayTrigger>
      </div>
    </div>
  );
};

export default RemoveGameForm;
