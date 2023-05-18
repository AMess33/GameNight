import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Button } from "@mui/materia";

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
    <form onSubmit={handleFormSubmit}>
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        name="email"
        type="email"
        value={formState.email}
        label="Enter Your Email"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        margin="normal"
      />

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default Signup;
