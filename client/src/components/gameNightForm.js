import React, { useState } from "react";
import { Modal, Box } from "@mui/material";
import { useMutation } from "@apollo/client";

import { ADD_GAME_NIGHT } from "../utils/mutations";

const GameNightForm = (props) => {
  const [formState, setFormState] = useState({ title: "", description: "" });
  const [createGameNight, { error, data }] = useMutation(ADD_GAME_NIGHT);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handelFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await createGameNight({
        variables: { ...formState },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal open onClose={props.close}>
      <Box className="bg-dark w-75 container border border-white rounded">
        <form className="createGameNightForm" onSubmit={handelFormSubmit}>
          <input
            className="form-input mx-2"
            placeholder="Give your Game Night a Title"
            name="title"
            type="Text"
            value={formState.title}
            onChange={handleChange}
          />
          <input
            className="form-input mx-2"
            placeholder="A description of your game night"
            name="description"
            type="text"
            value={formState.description}
            onChange={handleChange}
          />
          <button
            className="btn btn-block btn-primary"
            style={{ cursor: "pointer" }}
            type="submit"
          >
            Create Game Night
          </button>
        </form>
        {error && (
          <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
        )}
      </Box>
    </Modal>
  );
};

export default GameNightForm;
