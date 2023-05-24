import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { ADD_NOTE, UPDATE_NOTE, REMOVE_NOTE } from '../../utils/mutations';

const Note = ({ game }) => {
  // useEffect (unmount) to save note data if game.note.trim
  // If no note, display an "ADD Note Button"

  const [note, setNote] = useState(game.note);

  const updateNote = (e) => {
    setNote(e.target.value);
  }

  return (
    <Form.Group as={Row} className="mb-3">
      <Form.Label>Note for {game.name}</Form.Label>
      <Form.Control 
        as="textarea" 
        rows={5} 
        defaultValue={note}
        onChange={updateNote}
      />
    </Form.Group>
  );
};

export default Note;