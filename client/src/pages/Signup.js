import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Button, Stack } from "@mui/material";
import Text from "react-bootstrap";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="newAccountFormContainer">
      <form
        className="bg-white m-4 border border-dark rounded text-dark newAccountForm"
        onSubmit={handleFormSubmit}
      >
        <Stack
          spacing={2}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <h2>Create an Account</h2>
          <TextField
            label="Username"
            variant="outlined"
            name="username"
            type="text"
            value={formState.name}
            onChange={handleChange}
            size="small"
            margin="normal"
          />
          <TextField
            name="email"
            type="email"
            value={formState.email}
            label="Your Email"
            onChange={handleChange}
            variant="outlined"
            size="small"
            margin="normal"
          />
          <TextField
            label="Password"
            variant="outlined"
            name="password"
            type="password"
            value={formState.password}
            onChange={handleChange}
            size="small"
            margin="normal"
          />

          <Button
            type="submit"
            size="small"
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default Signup;
