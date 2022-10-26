import { useState } from "react";
import StopWatch from "./components/StopWatch";

export const App = () => {
  return <StopWatch />;
};

export default App;

/**
 * React Hooks
 * NOTES about setState & componentDidUpdate in SectionHeader
 * 1. useState
 * 2. useRef
 *  - Ref's don't re-render component -> Counter.js
 *  - Storing TimerId's -> Stopwatch.js
 *  - exercise-1 & exercise-2
 * 3. Manipulating the DOM with Refs -InputFocus.js,ScrollView.js
 * 4- Forwarding Refs -> RefForward.js
 * 5- Avoid changing DOM nodes managed by React -> Toggle
 *   - exercise-3 & exercise-4 & exercise-5
 *
 * React Awesome components
 */
