/**
 *  Make it so that clicking the “Search” button puts focus into the field.
 */
import { useRef } from "react";

export default function Page() {
  const inputRef = useRef();

  return (
    <>
      <nav>
        <button onClick={() => inputRef.current.focus()}>Search</button>
      </nav>
      <input placeholder="Looking for something?" ref={inputRef} />
    </>
  );
}
