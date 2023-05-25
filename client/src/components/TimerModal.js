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
    <Modal style={{ overflow: "scroll" }} open onClose={props.close}>
      <Box className="bg-dark w-75 container border border-white rounded">
        <button type="button" className="close" onClick={props.close}>
          <span>&times;</span>
        </button>
        <h2 className="text-center">Countdown Timer</h2>

        <div className="text-center">
          <div>
            <input
              type="number"
              placeholder="60"
              value={initialDuration}
              onChange={(e) => setInitialDuration(parseInt(e.target.value))}
            />
            <div className="">
              <button
                className="m-2 btn btn-light  text-dark"
                onClick={handleStart}
                disabled={timer || initialDuration <= 0}
              >
                Start
              </button>
              <button
                className="m-2 btn btn-light  text-dark"
                onClick={handleStop}
                disabled={!timer}
              >
                Stop
              </button>
              <button
                className="m-2 btn btn-light  text-dark"
                onClick={handleReset}
                disabled={!timer && initialDuration <= 0}
              >
                Reset
              </button>
            </div>
          </div>
          <h1 className="text-weight-bold">{duration}</h1>
          <h1 className={duration === 0 ? "" : "d-none"}>Time's Up!</h1>
        </div>
      </Box>
    </Modal>
  );
};

export default CountdownTimer;
