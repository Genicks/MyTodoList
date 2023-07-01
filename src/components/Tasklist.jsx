import React, { useEffect } from "react";
import Taskname from "./Taskname";
import { Discription } from "./Discription";
import "./customClass.css";
import { DueDate } from "./DueDate";
import Task from "./Task";
import Deletebutton from "./Deletebutton";

function Tasklist(Props) {
  const { myTasks, deleteTask, dynamicStyles } = Props;
  const myTasksArray = myTasks;

  useEffect(() => {
    const padding = myTasks.length === 0 ? "py-0" : "py-3";
    dynamicStyles.ATBStyles.padding = padding;
  }, [myTasks]);

  return (
    //! Dynamic styles padding
    <div className={dynamicStyles.ATBStyles.padding}>
      <ul className="list-group">
        {myTasks.map((myTasks, index) => (
          <Task
            index={index}
            deleteTask={deleteTask}
            myTasksArray={myTasksArray}
            myTasks={myTasks}
            key={index}
          >
            <Deletebutton deleteTask={deleteTask} />
          </Task>
        ))}
      </ul>
    </div>
  );
}

export default Tasklist;
