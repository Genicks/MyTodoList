import React, { useEffect } from "react";
import "./customClass.css";
import Task from "./Task";
import Deletebutton from "./Deletebutton";

function Tasklist(Props) {
  const { myTasks, deleteTask, dynamicStyles, today, tomorrow, yesterday } =
    Props;
  const myTasksArray = myTasks;

  useEffect(() => {
    const padding = myTasks.length === 0 ? "py-0" : "py-3";
    dynamicStyles.ATBStyles.padding = padding;
  }, [myTasks, dynamicStyles.ATBStyles]);

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
            dynamicStyles={dynamicStyles}
            today={today}
            tomorrow={tomorrow}
            yesterday={yesterday}
          >
            <Deletebutton deleteTask={deleteTask} key={index} />
          </Task>
        ))}
      </ul>
    </div>
  );
}

export default Tasklist;
