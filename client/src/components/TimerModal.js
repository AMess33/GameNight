import React, { useState, useEffect } from "react";
import { Modal, Box } from "@mui/material";

const CountdownTimer = (props) => {
  const [initialDuration, setInitialDuration] = useState(0);
  const [duration, setDuration] = useState(initialDuration);
  const [timer, setTimer] = useState(null);

  const handleStart = () => {
    if (duration > 0 && !timer) {
      setTimer(
        setInterval(() => {
          setDuration((prevDuration) => prevDuration - 1);
        }, 1000)
      );
    }
  };

  const handleStop = () => {
    if (timer) {
      clearInterval(timer);
      setTimer(null);
    }
  };

  const handleReset = () => {
    handleStop();
    setDuration(initialDuration);
  };

  useEffect(() => {
    setDuration(initialDuration);
  }, [initialDuration]);

  useEffect(() => {
    if (duration === 0) {
      handleStop();
    }
  }, [duration]);

  return (
    <Modal open onClose={props.close}>
      <Box>
        <h5 className="modal-title">Countdown Timer</h5>
        <button type="button" className="close" onClick={props.close}>
          <span>&times;</span>
        </button>
        <div className="modal-body">
          <div>
            <input
              type="number"
              value={initialDuration}
              onChange={(e) => setInitialDuration(parseInt(e.target.value))}
            />
            <button
              onClick={handleStart}
              disabled={timer || initialDuration <= 0}
            >
              Start
            </button>
            <button onClick={handleStop} disabled={!timer}>
              Stop
            </button>
            <button
              onClick={handleReset}
              disabled={!timer && initialDuration <= 0}
            >
              Reset
            </button>
          </div>
          <p>{duration}</p>
          <h1 className={duration === 0 ? "" : "d-none"}>Time's Up!</h1>
        </div>
      </Box>
    </Modal>
  );
};

export default CountdownTimer;
