import { useState, useMemo } from "react";

/**
 * useMemo - Exercise 1
 * Modify App below such that the page renders
 * faster when it you enter a number that you'd entered before
 *
 * Steps to reproduce to check if your answer is correct:
 * 1. Enter 2 in the input so that the value is 12
 * 2. Wait some time for the text to change
 * 3. Click the button
 * 4. Nothing should be logged in the console
 */

const reallyExpensiveSquare = (number) => {
  console.log(number);
  for (let i = 0; i < 1e9; i++);
  return number * number;
};

export default function App() {
  const [v, setV] = useState(1);
  const [k, setK] = useState(2);
  const vSquared = reallyExpensiveSquare(v);
  return (
    <>
      <input value={v} onChange={(e) => setV(parseInt(e.target.value, 10))} />
      <p>
        {v}^2 is {vSquared}
      </p>
      <button onClick={() => setK((k) => k + 1)}>Click</button>
    </>
  );
}
