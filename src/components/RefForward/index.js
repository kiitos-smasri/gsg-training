import { useRef, forwardRef } from "react";

const MyInput = forwardRef((props, refInput) => {
  return (
    <div>
      <input {...props} ref={refInput} />
      <div>Hello</div>
    </div>
  );
});

export default function MyForm() {
  const inputRef = useRef(null);

  function handleClick() {
    console.log(inputRef.current);
    inputRef.current.focus();
  }

  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}
