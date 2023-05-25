import React, { useState, useRef, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import { useMutation } from "@apollo/client";
import { ADD_GAME_NIGHT } from "../utils/mutations";
import { QUERY_GAME_NIGHTS } from "../utils/queries";

const GameNightForm = ({ userID }) => {
  // for future ref to submit button
  const refButton = useRef();
  const timerRef = useRef(null);

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [formState, setFormState] = useState({ title: "", description: "" });

  const [addGameNight] = useMutation(ADD_GAME_NIGHT, {
    update(cache, { data: { addGameNight } }) {
      try {
        const { gameNights } = cache.readQuery({ query: QUERY_GAME_NIGHTS });

        cache.writeQuery({
          query: QUERY_GAME_NIGHTS,
          data: { gameNights: [addGameNight, ...gameNights] },
        });
      } catch (e) {
        console.log(e);
      }
    },
    onCompleted: () => {
      setShowSuccess(true);
    },
    onError: () => {
      setShowError(true);
    },
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const enableSubmitButton = () => {
    // re-enables submit button after 3 seconds
    timerRef.current = setTimeout(() => {
      refButton.current.removeAttribute("disabled");
    }, 3000);
  };

  // clear setTimout when component unmounts
  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Clear input
    setFormState({ title: "", description: "" });
    // Prevent double-clicks
    refButton.current.setAttribute("disabled", true);
    // re-enable after 3 seconds
    enableSubmitButton();

    try {
      addGameNight({
        variables: {
          title: formState.title,
          description: formState.description,
        },
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <div className="game">
        <Form onSubmit={handleSubmit}>
          <InputGroup className="mb-3">
            <Form.Control
              name="title"
              aria-label="Enter the name of your Game Night"
              placeholder="Enter the name of your Game Night"
              onChange={handleInputChange}
              defaultValue={formState.title}
            />
            <Form.Control
              name="description"
              aria-label="Enter A Description"
              placeholder="Enter A Descrption"
              onChange={handleInputChange}
              defaultValue={formState.description}
            />
            <Button ref={refButton} variant="outline-light" type="submit">
              Create Game Night
            </Button>
          </InputGroup>
        </Form>
        {showSuccess ? (
          <Alert
            variant="dark"
            onClose={() => setShowSuccess(false)}
            dismissible
          >
            <p>
              Success! New Game Night created! Open your new Game Night below.
            </p>
          </Alert>
        ) : (
          <></>
        )}
        {showError ? (
          <Alert
            variant="danger"
            onClose={() => setShowError(false)}
            dismissible
          >
            <p>Unable to make a new Game Night. Something went wrong.</p>
          </Alert>
        ) : (
          <></>
        )}
      </div>
    </Container>
  );
};

export default GameNightForm;
