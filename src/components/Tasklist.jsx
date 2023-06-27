import React from "react";
import Task from "./Task";
import { Discription } from "./Discription";
import './customClass.css'

function Tasklist(Props) {
  const { myTasks, deleteTask, DynamicSylesBorderPadding } = Props;

  return (
    <div className={DynamicSylesBorderPadding.padding}>
      <ul className="list-group">
        {myTasks.map((myTasks, index) => (
          <li className="list-group-item container  text-black my-1" key={index}>
            <div className="row justify-content-between d-flex align-items-center">
              {/* This code renders the check box and label */}
              <div className="col-auto ">
                <Task index={index} deleteTask={deleteTask} myTasks={myTasks} />
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
