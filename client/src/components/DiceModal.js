import React, { useState } from "react";

import Dice1 from "../Images/Dice1.png";
import Dice2 from "../Images/Dice2.png";
import Dice3 from "../Images/Dice3.png";
import Dice4 from "../Images/Dice4.png";
import Dice5 from "../Images/Dice5.png";
import Dice6 from "../Images/Dice6.png";

const DiceModal = (props) => {
  var diceImages = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

  const [image, setNewImage] = useState(diceImages[0]);
  const [image2, setNewImage2] = useState(diceImages[1]);

  const rollDice = () => {
    // Generate random number
    var randomNum1 = Math.floor(Math.random() * 6);
    var randomNum2 = Math.floor(Math.random() * 6);
    setNewImage(diceImages[randomNum1]);
    setNewImage2(diceImages[randomNum2]);
  };

  return (
    <div className="" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Dice Roll</h5>
            <button type="button" className="close" onClick={props.close}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <center>
              <div className="container text-center p-2 m-2">
                <img
                  src={image}
                  className="rounded float-left align-middle p-2 m-2"
                  alt="dice1"
                  style={{ width: "300px", height: "300px" }}
                />
                <div
                  className="rounded float-right align-middle w-25 p-2 m-2"
                  style={{ width: "5px", display: "inline-block" }}
                ></div>
                <img
                  src={image2}
                  className="rounded float-right align-middle w-25 p-2 m-2"
                  alt="dice2"
                  style={{ width: "300px", height: "300px" }}
                />
              </div>
              <button
                type="button"
                className="btn btn-outline-dark"
                onClick={rollDice}
              >
                Roll Dice
              </button>
            </center>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={props.close}>
              Close
            </button>
            <button className="btn">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiceModal;
