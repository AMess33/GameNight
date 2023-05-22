import React, { useState } from "react";
import { Modal, Box } from "@mui/material";

const RandomizerModal = () => {
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
    <Modal open>
      <Box>
        <h2>Randomizer</h2>
        <div>
          <label htmlFor="input">
            Enter Players or Items to be Randomized:
          </label>
          <input
            type="text"
            id="input"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button onClick={handleAddToArray}>Add to List</button>
        </div>
        <div>
          <input
            type="checkbox"
            id="generateTeams"
            checked={generateTeams}
            onChange={handleToggleGenerateTeams}
          />
          <label htmlFor="generateTeams">Create Random Teams</label>
        </div>
        {generateTeams && (
          <div>
            <label htmlFor="teamSize">Team Size:</label>
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
        <div>
          <button onClick={handleRandomizeArray}>Randomize</button>
          <button onClick={handleReset}>Reset</button>
        </div>
        <div>
          <h3>Players:</h3>
          {array.length === 0 ? (
            <p>No elements in the array.</p>
          ) : (
            <ul>
              {array.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <h3>Randomized {generateTeams ? "Teams" : "Order"}:</h3>
          {randomizedArray.length === 0 ? (
            <p>No {generateTeams ? "team" : "order"} has been generated yet.</p>
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
      </Box>
    </Modal>
  );
};

export default RandomizerModal;
