import { useState, useCallback, useEffect } from "react";
import SuperSlowList from "./List";

/**
 * useCallback - Exercise 1
 * Modify `App` below such that the clicking
 * the toggle button does not log "Rerendering this"
 * in the console
 */

export default function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const getItems = () => {
    const defaultValueIfNumberIsNaN = Number.isNaN(number) ? 0 : number;
    return [
      defaultValueIfNumberIsNaN,
      defaultValueIfNumberIsNaN + 1,
      defaultValueIfNumberIsNaN + 2,
    ];
  };

  const theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value, 10))}
      />
      <button onClick={() => setDark(!dark)}>Toggle</button>
      <SuperSlowList getItems={getItems} />
    </div>
  );
}

export function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("Rerendering this");
    setItems(getItems());
  }, [getItems]);

  return items.map((item) => <div key={item}>{item}</div>);
}
