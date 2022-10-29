/**
 *
 * Make it so that clicking the “Search” button puts focus into the field.
 * Note that each component is defined in a separate file and shouldn’t be moved out of it.
 * How do you connect them together?
 */

import { forwardRef, useRef } from "react";

export function SearchButton({ onClick }) {
  return <button onClick={onClick}>Search</button>;
}

export const SearchInput = forwardRef((props, refff) => {
  return <input placeholder="Looking for something?" ref={refff} />;
});

export default function Page() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <nav>
        <SearchButton onClick={handleClick} />
      </nav>
      <SearchInput ref={inputRef} />
    </>
  );
}
