import React, { useState} from "react";

import AddTask from "../AddTask/AddTask";
import styles from "./tasks.module.css";

const Tasks = (props) => {
  // NOTE: do not delete `data-cy` key value pair
  const [data, setData] = useState("");
 
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
        {/* <AddTask/> */}
        <div className={styles.AddTask} >{props.id}
        
        </div>
        
        {props.text}
        {props.count }
        
       
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;