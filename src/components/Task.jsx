import React from "react";
import Taskname from "./Taskname";
import { Discription } from "./Discription";
import { DueDate } from "./DueDate";

const Task = (props) => {
  const { index, deleteTask, myTasksArray, myTasks } = props;
  return (
    <li
      className="list-group-item container text-light my-1 bg-transparent border border-secondary rounded-3"
    >
      <div className="row justify-content-between d-flex align-items-center">
        {/* This code renders the check box and label & time*/}
        <div className="col-auto">
          <div className="row d-flex align-items-center ">
            <Taskname
              index={index}
              deleteTask={deleteTask}
              myTasks={myTasksArray}
            />
            <DueDate myTasks={myTasks} />
          </div>
        </div>
        {/* this code renders the delete button */}
        <div className="col-auto">
          {React.Children.map(props.children, (child) => {
            return React.cloneElement(child, { index, ...child.Props });
          })}
        </div>
        {/* this code renders the discription */}
      </div>
      <div className="row d-flex align-items-center">
        <Discription myTasks={myTasks} />
      </div>
    </li>
  );
};
export default Task;
