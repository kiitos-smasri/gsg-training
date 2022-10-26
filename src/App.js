import { useState } from "react";
import SectionHeader from "./components/SectionHeader";

export const App = () => {
  return <SectionHeader />;
};

export default App;
/**
 * Lifting state up (Sharing state between components)
 * Resetting state - reset-state.js
 * Forms - input, textarea - select - MultiInputs
 * Class Components -> AddsBar , Product Card ,  Gallery
 * Exercise -> SectionHeader,Shape, ScoreBoard
 * State lifecycle https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
mounting
updating
unmounting.

back to reset state with sectionHeader in class component, to see lifecycle
import React, { useState } from "react";
const App = () => {
  const [val, setVal] = useState(0);

  return (
    <div onClick={() => setVal(val + 1)}>
      <SectionHeader key={val} />
    </div>
  );
};
export default App;

 * React Awesome components 
 */
