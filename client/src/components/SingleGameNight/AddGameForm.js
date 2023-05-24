import React, { useState, useRef } from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import { useMutation } from '@apollo/client';
import { ADD_GAME } from '../../utils/mutations';

const AddGameForm = ({ gameNightId }) => {

  // for future ref to submit button
  const refButton = useRef();

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [name, setName] = useState('');

  const [addGame] = useMutation(ADD_GAME, {
    onCompleted: () => { setShowSuccess(true) },
    onError: () => { setShowError(true) }
  });

  const handleInputChange = (e) => {
    setName(e.target.value);
  }

  const enableSubmitButton = () => {
    // re-enables submit button after 3 seconds
    setTimeout(() => {
      refButton.current.removeAttribute('disabled');
    }, 3000);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prevent double-clicks
    refButton.current.setAttribute('disabled', true);
    // re-enable after 3 seconds
    enableSubmitButton();
    // clear input
    setName("");

    try {
      addGame({
        variables: { gameNightId, name }
      });
      } catch (err) {
      console.error(err);
    }
  }

  return (
    <Container>
      <div className="game">
        <Form
          onSubmit={handleSubmit} 
        >
          <InputGroup className="mb-3">
            <Form.Control
              aria-label="Enter the name of your game"
              placeholder="Enter the name of your game"
              onChange={handleInputChange}
            />
            <Button
              ref={refButton}
              variant="outline-light"
              type="submit"
            >
              Add Game
            </Button>
          </InputGroup>  
        </Form>
        { showSuccess ?
            <Alert variant="dark" onClose={() => setShowSuccess(false)} dismissible>
              <p>Success!  New game created!</p>
            </Alert>
            :
            <></>
        }
        { showError ? 
            <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
              <p>Unable to make a new game. Something went wrong.</p>
            </Alert>
            :
            <></>
        }
      </div>
    </Container>
  );
}; 

export default AddGameForm;