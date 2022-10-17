import "./App.css";
import React, { useState } from "react";
import ProductCard from "./components/ProductCard";

const App = () => {
  let counter = 0;

  const [num, setNum] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("hello", num);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type={"text"}
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default App;
