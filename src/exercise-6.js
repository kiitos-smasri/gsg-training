import { useRef } from "react";
/**
 * 
 * In this example, the form renders a <MyInput /> component.

Use the input’s focus() method to make MyInput automatically focus when it appears
 on the screen. There is already a commented out implementation, but it doesn’t 
 quite work. Figure out why it doesn’t work, and fix it. (If you’re familiar with
     the autoFocus attribute, pretend that it does not exist: we are reimplementing
      the same functionality from scratch.)
 */

export default function MyInput({ value, onChange }) {
  const ref = useRef(null);

  // TODO: This doesn't quite work. Fix it.
  // ref.current.focus()

  return <input ref={ref} value={value} onChange={onChange} />;
}
