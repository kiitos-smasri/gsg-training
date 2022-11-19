//The React useCallback Hook returns a memoized callback function.
//The useCallback and useMemo Hooks are similar.
//The main difference is that useMemo returns a memoized value
//and useCallback returns a memoized function.

import { useState, memo } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };
  /**
   * const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]); */

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

const Todos = memo(({ todos, addTodo }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
});

//export default memo(Todos);
export default App;

//even when using memo, Todos keeps re rendering
//To fix this, we can use the useCallback hook to prevent the function from being recreated unless necessary.
