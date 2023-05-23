import React from "react";
import { useState } from "react";
import dice from "../Images/002-dice.png";
import timer from "../Images/001-sand-clock.png";
import random from "../Images/003-surprise-box.png";
import DiceModal from "./DiceModal";
import TimerModal from "./TimerModal";
import RandomModal from "./RandomizerModal";

const Widgets = () => {
  const [modalState, setModalState] = useState("");

  const diceClick = (event) => {
    setModalState("diceModal");
  };

  const timerClick = (event) => {
    setModalState("timerModal");
  };

  const randomClick = (event) => {
    setModalState("randomModal");
  };

  return (
    <div className="container">
      {/* <div className="col-3"> */}
      <div>
        <div className="card border border-dark rounded d-flex">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h4>Dice Roll</h4>
              <button
                type="button"
                onClick={diceClick}
                className="btn btn-light border border-dark rounded"
              >
                <img src={dice} className="image" alt="RollDice"></img>
              </button>
            </li>
            <li className="list-group-item">
              <h4>Timer</h4>
              <button
                type="button"
                onClick={timerClick}
                className="btn btn-light border border-dark rounded"
              >
                <img src={timer} className="image" alt="GameTimer"></img>
              </button>
            </li>
            <li className="list-group-item">
              <h4>Randomizer</h4>
              <button
                type="button"
                onClick={randomClick}
                className="btn btn-light border border-dark rounded"
              >
                <img src={random} className="image" alt="Randomizer"></img>
              </button>
            </li>
          </ul>
        </div>
        <div>
          {modalState === "diceModal" && (
            <DiceModal close={() => setModalState("")} />
          )}
          {modalState === "timerModal" && (
            <TimerModal close={() => setModalState("")} />
          )}
          {modalState === "randomModal" && (
            <RandomModal close={() => setModalState("")} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Widgets;
