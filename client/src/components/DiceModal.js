import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

import Dice1 from "./images/Dice1.png";
import Dice2 from "./images/Dice2.png";
import Dice3 from "./images/Dice3.png";
import Dice4 from "./images/Dice4.png";
import Dice5 from "./images/Dice5.png";
import Dice6 from "./images/Dice6.png";

const DiceModal = () => {
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

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
    <>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Dice Roll</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <center>
                <div className="container text-center p-2 m-2">
                  <img
                    src={image}
                    style={{ width: "300px", height: "300px" }}
                    className="rounded float-left align-middle p-2 m-2"
                    alt="dice1"
                  ></img>
                  <div style={{ width: "5px", display: "inline-block" }}></div>
                  <img
                    src={image2}
                    style={{ width: "300px", height: "300px" }}
                    className="rounded float right align-middle w-25 p-2 m-2"
                    alt="dice2"
                  ></img>
                </div>
                <button
                  type="button"
                  class="btn btn-outline-dark"
                  onClick={rollDice()}
                >
                  Roll Dice
                </button>
              </center>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};

export default DiceModal;
