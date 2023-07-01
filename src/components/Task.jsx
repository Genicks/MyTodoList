import React, { useEffect } from "react";
import Taskname from "./Taskname";
import { Discription } from "./Discription";
import { DueDate } from "./DueDate";

const Task = (props) => {
  const {
    index,
    deleteTask,
    myTasksArray,
    myTasks,
    dynamicStyles,
    today,
    tomorrow,
    yesterday,
    inputDate,
  } = props;

  const style = () => {
    const isObject = typeof myTasksArray[index].inputDate === "object" ? true : false;
    if (isObject) {
      if (
        myTasksArray[index].inputDate.toLocaleDateString ===
        today.toLocaleDateString &  myTasksArray[index].inputDate.toLocaleDateString ===
        today.toLocaleDateString
      ) {
        dynamicStyles.TaskStyles.color = "text-success border-success";
      } else if (
        myTasksArray[index].inputDate.toLocaleDateString() ===
        tomorrow.toLocaleDateString()
      ) {
        dynamicStyles.TaskStyles.color = "text-warning border-warning";
      } else if (
        myTasksArray[index].inputDate.toLocaleDateString() <=
        yesterday.toLocaleDateString()
      ) {
        dynamicStyles.TaskStyles.color = "text-danger border-danger";
      } else {
        dynamicStyles.TaskStyles.color = "text-secondary border-secondary";
      }
    } else {
      dynamicStyles.TaskStyles.color = "text-secondary border-secondary";
    }
  };


  return (
    <li className="list-group-item container text-light my-1 bg-transparent border border-secondary rounded-3">
      {style()}
      <div className="row justify-content-between d-flex align-items-center">
        {/* This code renders the check box and label & time*/}
        <div className="col-auto">
          <div className="row d-flex align-items-center ">
            <Taskname
              index={index}
              deleteTask={deleteTask}
              myTasks={myTasksArray}
              dynamicStyles={dynamicStyles}
            />
            <DueDate myTasks={myTasks} dynamicStyles={dynamicStyles} />
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
        <Discription myTasks={myTasks} dynamicStyles={dynamicStyles} />
      </div>
    </li>
  );
};
export default Task;
