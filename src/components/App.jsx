import Header from "./Header";
import Tasklist from "./Tasklist";
import Addtask from "./Addtask";

import { useState } from "react";
import Deletebutton from "./Deletebutton";

function App() {
  const [taskNum, setTaskNum] = useState(0);
  const [textBoxValue, setTextBoxValue] = useState("");
  let [myTasks, setMyTask] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    setTextBoxValue(value);
  };

  const handleButtonClick = () => {
    setMyTask([...myTasks, textBoxValue]);
    setTextBoxValue("");
    setTaskNum(taskNum + 1);
  };

  const deleteTask = (index, timeout) => {
    setTimeout(() => {
      myTasks = [...myTasks.slice(0, index), ...myTasks.slice(index + 1)];
      setMyTask(myTasks);
      setTaskNum(taskNum - 1);
    }, timeout);
  };

  return (
    <div className="container">
      <Header taskNum={taskNum} myTasks={myTasks} />
      <Addtask
        textBoxValue={textBoxValue}
        handleChange={handleChange}
        handleButtonClick={handleButtonClick}
      />
      <Tasklist tasks={myTasks} deleteTask={deleteTask}>
        <Deletebutton deleteTask={deleteTask} />
      </Tasklist>
    </div>
  );
}

export default App;
