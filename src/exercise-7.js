/**
 * This form renders two <MyInput /> components.

Press “Show form” and notice that the second field automatically
 gets focused. This is because both of the <MyInput /> components
  try to focus the field inside. When you call focus() for two input 
  fields in a row, the last one always “wins”.

Let’s say you want to focus the first field. The first MyInput component
 now receives a boolean shouldFocus prop set to true. Change the logic so 
 that focus() is only called if the shouldFocus prop received by MyInput is true.
 */
import { useEffect, useRef } from "react";

export default function MyInput({ shouldFocus, value, onChange }) {
  const ref = useRef(null);

  // TODO: call focus() only if shouldFocus is true.
  useEffect(() => {
    shouldFocus && ref.current.focus();
  }, [shouldFocus]);

  return <input ref={ref} value={value} onChange={onChange} />;
}
