import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

import { useMutation } from '@apollo/client';
import { REMOVE_GAME } from '../../utils/mutations';

const RemoveGameForm = ({ game }) => {
  
  const [removeGame] = useMutation(REMOVE_GAME, {
    // TODO: Use modal instead of alerts
    onCompleted: () => { window.alert(`${game.name} has been removed from the database.`) },
    onError: () => { alert('Something went wrong') }
  });

  const handleClick = (e) => {
    try {
      removeGame({ variables: { gameId: game._id } })
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="float-end">
      <Button 
        variant="outline-light" 
        size="sm"
        onClick={handleClick}
      >
        Remove
      </Button>
    </div>
  )
};

export default RemoveGameForm;