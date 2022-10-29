import { useState, useRef } from "react";

export default function Counter() {
  const [show, setShow] = useState(true);
  const paragraphRef = useRef(null);

  /**
   * {
   * current: null
   * }
   */

  return (
    <div>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Toggle with setState
      </button>
      <button
        onClick={() => {
          paragraphRef.current.remove();
        }}
      >
        Remove from the DOM
      </button>
      {show && <p ref={paragraphRef}>Hello world</p>}
    </div>
  );
}
