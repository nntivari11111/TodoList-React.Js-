import React,{useState} from "react";
import styles from "./addTask.module.css";

const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
    console.log(todos);
  }
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" value={value} onChange={(e) => {
        setValue(e.target.value);
      }}
       />
      <button onClick={() => {
        addTodo(value);
        setValue("")
      }} data-cy="add-task-button"> ADD Todo</button>
      {todos.map((value)=>(
      <div>{value}</div>
      ))}
    </div>
    
  );
};

export default AddTask;