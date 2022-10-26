import { useRef, useState } from "react";

export default function Counter() {
  const [value, setValue] = useState(0);
  let counterRef = useRef(0);
  let counter = 0;

  function handleClick() {
    counter = counter + 1;
    counterRef.current = counterRef.current + 1;

    console.log("Variable counter", counter);
    console.log("ref counter", counterRef);
    setValue(counterRef.current);
    // This doesn't re-render the component!
    //setCounter(counter + 1);
  }

  return <button onClick={handleClick}>You clicked {counter} times</button>;
}
