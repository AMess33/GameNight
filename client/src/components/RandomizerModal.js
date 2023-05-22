import React, { useState } from "react";
import { Modal, Box } from "@mui/material";

const RandomizerModal = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [array, setArray] = useState([]);
  const [randomizedArray, setRandomizedArray] = useState([]);
  const [teamSize, setTeamSize] = useState(0);
  const [generateTeams, setGenerateTeams] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddToArray = () => {
    setArray((prevArray) => [...prevArray, inputValue]);
    setInputValue("");
  };

  const handleRandomizeArray = () => {
    if (generateTeams && (teamSize <= 0 || teamSize > array.length)) {
      alert("Invalid team size");
      return;
    }

    const shuffledArray = [...array].sort(() => Math.random() - 0.5);

    if (generateTeams) {
      const teams = [];

      for (let i = 0; i < array.length; i += teamSize) {
        const team = shuffledArray.slice(i, i + teamSize);
        teams.push(team);
      }

      setRandomizedArray(teams);
    } else {
      setRandomizedArray(shuffledArray);
    }
  };

  const handleTeamSizeChange = (e) => {
    setTeamSize(parseInt(e.target.value));
  };

  const handleToggleGenerateTeams = () => {
    setGenerateTeams((prevGenerateTeams) => !prevGenerateTeams);
  };

  const handleReset = () => {
    setArray([]);
    setRandomizedArray([]);
  };

  return (
    <Modal style={{ overflow: "scroll" }} open>
      <Box className="bg-dark w-75 container border border-white rounded">
        <button type="button" className="close m-2" onClick={props.close}>
          <span>&times;</span>
        </button>
        <h1 className="text-center">Randomizer</h1>
        <div className="text-center">
          <label htmlFor="input">
            Enter Players or Items to be Randomized:
          </label>
          <input
            className="m-1"
            type="text"
            id="input"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button
            className="m-2 btn btn-light  text-dark"
            onClick={handleAddToArray}
          >
            Add to List
          </button>
        </div>
        <div className="text-center">
          <input
            type="checkbox"
            id="generateTeams"
            checked={generateTeams}
            onChange={handleToggleGenerateTeams}
          />
          <label className="p-2" htmlFor="generateTeams">
            Create Random Teams
          </label>
        </div>
        {generateTeams && (
          <div className="text-center">
            <label htmlFor="teamSize">Players per Team:</label>
            <input
              type="number"
              id="teamSize"
              min="1"
              max={array.length}
              value={teamSize}
              onChange={handleTeamSizeChange}
            />
          </div>
        )}
        <div className="text-center">
          <button
            className="m-2 btn btn-light  text-dark"
            onClick={handleRandomizeArray}
          >
            Randomize
          </button>
          <button
            className="m-2 btn btn-light  text-dark"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
        <div className="row text-center">
          <div className="col">
            <h3>Players:</h3>
            {array.length === 0 ? (
              <p>No players added yet.</p>
            ) : (
              <ul type="none">
                {array.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="col">
            <h3>Random {generateTeams ? "Teams" : "Order"}:</h3>
            {randomizedArray.length === 0 ? (
              <p>
                No {generateTeams ? "team" : "order"} has been generated yet.
              </p>
            ) : (
              <div>
                {generateTeams && randomizedArray.length > 0 ? (
                  randomizedArray.map((team, index) => (
                    <div key={index}>
                      <p>Team {index + 1}:</p>
                      <ul>
                        {team.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))
                ) : (
                  <ol type="1">
                    {randomizedArray.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ol>
                )}
              </div>
            )}
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default RandomizerModal;
