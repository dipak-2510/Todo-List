import { useState } from "react";
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {

  const [todo, setTodo] = useState('');
  const [task, setTask] = useState([]);

  function addTodo() {
    if (todo.trim() != '') {
      setTask([...task, todo]);  // add todo to task list
      setTodo('');               // clear input
    }
  }

  return (
    <>
      <h1>Todo List</h1>

      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a task"
        className="todo-input"
      />

      <button onClick={addTodo} className="add-button">Add todo</button>

      <ul className="todo-list">
        {task.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
