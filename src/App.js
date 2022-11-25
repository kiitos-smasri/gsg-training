//import axios from "axios";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import useData from "./hooks/useData";
import { axiosInstance, axiosInstance2 } from "./axios";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axiosInstance2.get("/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  const addNewProduct = async () => {
    const newProduct = await axiosInstance2.post("/products", {
      title: "sawsan product",
      price: 13.5,
      description: "lorem ipsum set",
      image: "https://i.pravatar.cc",
      category: "electronic",
    });

    setProducts([...products, newProduct.data]);
  };

  return (
    <>
      <button onClick={addNewProduct}>Add New</button>
      {products?.map((items) => (
        <div>{items.title}</div>
      ))}
    </>
  );
};

export default Home;

// useEffect recap
// React Context & useContext Hook -> useContext.js
// context-2
// useContext-exercise.js
// useContext-exercise-2.js
// Context with custom hook

// useReducer -> The useReducer Hook is similar to the useState Hook.
// useReducer-example.js
// Step 1: Move from setting state to dispatching actions
/**
 * function handleAddTask(text) {
  dispatch({
    type: 'added',
    id: nextId++,
    text: text,
  });
}

function handleChangeTask(task) {
  dispatch({
    type: 'changed',
    task: task,
  });
}

function handleDeleteTask(taskId) {
  dispatch({
    type: 'deleted',
    id: taskId,
  });
}
 */
// Step 2: Write a reducer function
/**
 * function tasksReducer(tasks, action) {
  if (action.type === 'added') {
    return [
      ...tasks,
      {
        id: action.id,
        text: action.text,
        done: false,
      },
    ];
  } else if (action.type === 'changed') {
    return tasks.map((t) => {
      if (t.id === action.task.id) {
        return action.task;
      } else {
        return t;
      }
    });
  } else if (action.type === 'deleted') {
    return tasks.filter((t) => t.id !== action.id);
  } else {
    throw Error('Unknown action: ' + action.type);
  }
}

---------> using switch
function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'changed': {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
 */
// Step 3: Use the reducer from your component
// replace const [tasks, setTasks] = useState(initialTasks); with const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
// Exercises -> useReducerExercises

// Custom Hooks -> Hooks are reusable functions.
// Use Context into Hooks
//
