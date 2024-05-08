
import { useState, useRef } from "react";


const StopWatch = () => {
  
  
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
  };

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };
  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = Math.floor(timeInSeconds % 60);

    const formattedTime = [
      hours.toString().padStart(2, '0'),
      minutes.toString().padStart(2, '0'),
      seconds.toString().padStart(2, '0'),
    ].join(':');

    return formattedTime;
  };

  return (
    <div className="stopWatch">
      <div className="display">{formatTime(time)}</div>
      <div className="control">
        <button className="start"  onClick={startTimer}>
          Start
        </button>
        <button className="Stop" onClick={stopTimer}>
          Stop
        </button>
        <button className="Reset" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default StopWatch;
