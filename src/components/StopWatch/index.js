import { useState, useRef } from "react";

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);
  const timerRef = useRef(Date.now());

  function handleStart() {
    console.log(timerRef);
    setStartTime(timerRef.current);
    setNow(Date.now());

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);

    console.log("timer id", intervalRef.current);
  }

  function handleStop() {
    timerRef.current = now;
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;

  if (startTime != null && now != null) {
    secondsPassed = Math.abs((now - startTime) / 1000);
  }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}
