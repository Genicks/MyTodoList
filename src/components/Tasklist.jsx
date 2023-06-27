import React from "react";
import Task from "./Task";
import { Discription } from "./Discription";
import "./customClass.css";
import { DueDate } from "./DueDate";

function Tasklist(Props) {
  const { myTasks, deleteTask, DynamicSylesBorderPadding } = Props;

  const myTasksArray = myTasks;
  return (
    <div className={DynamicSylesBorderPadding.padding}>
      <ul className="list-group">
        {myTasks.map((myTasks, index) => (
          <li
            className="list-group-item container text-light my-1 bg-transparent border border-secondary rounded-3"
            key={index}
          >
            <div className="row justify-content-between d-flex align-items-center">
              {/* This code renders the check box and label & time*/}
              <div className="col-auto">
                <div className="row d-flex align-items-center ">
                  <Task
                    index={index}
                    deleteTask={deleteTask}
                    myTasks={myTasksArray}
                  />
                  <DueDate index={index}/>
                </div>
              </div>

              {/* this code renders the delete button */}
              <div className="col-auto">
                {React.Children.map(Props.children, (child) => {
                  return React.cloneElement(child, { index, ...child.Props });
                })}
              </div>

              {/* this code renders the discription */}
            </div>
            <div className="row">
              <p className="col text-secondary mt-2 my-auto px-5 border-top">
                <Discription myTasks={myTasks} />
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasklist;
