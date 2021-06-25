import React, { useEffect, useState } from "react";
import Square from "./Square";

let data;

const loopIt = (index, squares, setSquares) => {
 data = setTimeout(() => {
    squares[index] = true;

    if (index !== -1) {
      setSquares([...squares]);
    }
  }, 500);
};

const ProgressBar = () => {
  const box = Array.from({ length: 15 }, () => false);
  const [squares, setSquares] = useState(box);
  const [stop, setstop] = useState(false);
  const [start, setstart] = useState(false);

  const handleStart = () => {
    setstop(false);
    setstart(true);
  };

  const handleStop = () => {
    setstop(true);
    setstart(false);
    clearTimeout(data)
  };

  const handleReset = () => {
    setstart(false);
    setstop(false);
  };

  useEffect(() => {
    if ((!stop && !start) && squares.indexOf(true) !== -1 ) {
        clearTimeout(data)
        return setSquares(box);
    }

    if (!stop && start) {
      loopIt(squares.indexOf(false), squares, setSquares);
    }
  }, [stop, start, box, squares]);

  return (
    <div>
      <h1 className="title-progress-bar">Progress Bar</h1>

      <div className="container-progress-bar">
        {squares.map((e, index) => (
          <Square key={index} active={e} />
        ))}
      </div>

      <div className="button-container">
        <button onClick={handleStart} className="button">
          Start
        </button>
        <button onClick={handleStop} className="button">
          Stop
        </button>
        <button onClick={handleReset} className="button">
          Reset
        </button>
      </div>
    </div>
  );
};

export default ProgressBar;
