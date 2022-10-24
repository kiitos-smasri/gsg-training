import { useState } from "react";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
        "apple" and is often translated as "full of apples". In fact, the region
        surrounding Almaty is thought to be the ancestral home of the apple, and
        the wild <i lang="la">Malus sieversii</i> is considered a likely
        candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
}

function Panel({ title, children, isActive, onShow }) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
    </section>
  );
}

/**
 * Lifting state up (Sharing state between components)
 * Resetting state - reset-state.js
 * Forms - input, textarea - select - MultiInputs
 * Class Components -> AddsBar , Product Card ,  Gallery
 * Exercise -> SectionHeader,Shape, ScoreBoard
 * State lifecycle https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
 * initialization
mounting
updating, and
unmounting.

back to reset state with sectionHeader in class component
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

* Lifting state up (Sharing state between components) - Class components 
 * React Awsome components 
 */
