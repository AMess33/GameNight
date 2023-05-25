import React, { useState, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { useMutation } from '@apollo/client';
import { UPDATE_NOTE } from '../../utils/mutations';

const Note = ({ game }) => {

  const gameNote = game.notes || "";

  const original = useRef(gameNote.trim());
  const [note, setNote] = useState(gameNote);

  const [updateNote] = useMutation(UPDATE_NOTE);

  const saveNote = (e) => {
    const text = note.trim();
    if (text !== original.current) {
      try {
        updateNote({
          variables: {
            gameId: game._id,
            notes: text
          }
        });
      } catch (err) {
        console.error(err);
      }
      original.current = text;
    }  
    return;
  }

  const handleChange = (e) => {
    setNote(e.target.value);
  }

  return (
    <Form.Group as={Row} className="mb-3">
      <Form.Label>Note for {game.name}</Form.Label>
      <Form.Control 
        as="textarea" 
        rows={3} 
        onChange={handleChange}
        onBlur={saveNote}
        defaultValue={note}
      />
    </Form.Group>
  );
};

export default Note;