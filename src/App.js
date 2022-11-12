import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  return (
    <>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <SearchResults query={query} />
    </>
  );
}

function SearchResults({ query }) {
  const [results, setResults] = useState({});

  //console.log("search REsults", { results });

  useEffect(() => {
    let ignore = false;

    axios
      .get(`https://demo.dataverse.org/api/search?q=${query}`)
      .then((response) => {
        if (!ignore) {
          setResults(response);
        }
      });
    return () => {
      console.log("cleanup", ignore);
      ignore = true;
    };
  }, [query]);

  return <></>;
}

export default App;

//Continue useEffect
// useEffect-exercise.js
//useEffect-exercise-2.js

//React Router
//install react-router-dom
//router-1.js

//useMemo
//The React useMemo Hook returns a memoized value.
//The useMemo Hook only runs when one of its dependencies update.
//useMemo.js
//useMemo-exercise.js

//React Memo
//Using memo will cause React to skip rendering a component if its props have not changed.
//This can improve performance.
// memo.js

// useCallback
//The React useCallback Hook returns a memoized callback function.
//The useCallback and useMemo Hooks are similar.
//The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.
//useCallback.js
//useCallback-exercise.js
