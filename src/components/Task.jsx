import React from "react";
import Taskname from "./Taskname";
import { Discription } from "./Discription";
import { DueDate } from "./DueDate";
import Checkbox from "./Checkbox";
import Deletebutton from "./Deletebutton";

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
  } = props;

  const style = () => {
    const isObject =
      typeof myTasksArray[index].inputDate === "object" ? true : false;
    if (isObject) {
      if (
        myTasksArray[index].inputDate.toLocaleDateString() ===
          today.toLocaleDateString() &&
        myTasksArray[index].inputDate.getTime() >= today.getTime()
      ) {
        dynamicStyles.TaskStyles.color = "text-success border-success";
      } else if (
        myTasksArray[index].inputDate.toLocaleDateString() ===
          tomorrow.toLocaleDateString() &&
        myTasksArray[index].inputDate.getTime() > today.getTime()
      ) {
        dynamicStyles.TaskStyles.color = "text-warning border-warning";
      } else if (
        myTasksArray[index].inputDate.toLocaleDateString() <=
          yesterday.toLocaleDateString() ||
        myTasksArray[index].inputDate.getTime() < today.getTime()
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
    <li className=" container list-group-item my-1 px-0 bg-transparent border border-secondary rounded-3">
      {style()}
      <div className="row m-0 p-0 justify-content-between d-flex align-items-center">
        <div className="row m-0 p-0 d-flex align-items-center ">
          <Checkbox
            index={index}
            dynamicStyles={dynamicStyles}
            deleteTask={deleteTask}
          />

          <div className="col-10 p-0">
            <Taskname
              index={index}
              myTasks={myTasksArray}
              dynamicStyles={dynamicStyles}
            />
            <DueDate myTasks={myTasks} dynamicStyles={dynamicStyles} />
          </div>

          <Deletebutton deleteTask={deleteTask} index={index} />
        </div>
        <div className="row-auto p-0 d-flex align-items-center">
          <Discription myTasks={myTasks} dynamicStyles={dynamicStyles} />
        </div>
      </div>
    </li>
  );
};
export default Task;
