import React from "react";
import Checkbox from "./Checkbox";

function Tasklist(Props) {
  const { tasks, deleteTask } = Props;

  return (
    <div className="py-3">
      <ul className="list-group">
        {tasks.map((task, index) => (
          <li className="list-group-item" key={index}>
            <div className="row justify-content-between d-flex align-items-center">
              <div className="col-auto">
                <Checkbox index={index} deleteTask={deleteTask} />
                <label className="px-2">{task}</label>
              </div>
              {React.Children.map(Props.children, (child) => {
                return React.cloneElement(child, { index, ...child.Props });
              })}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasklist;
