import Header from "./Header";
import Tasklist from "./Tasklist";
import { useEffect, useState } from "react";
import Deletebutton from "./Deletebutton";
import { AddtaskBtn } from "./AddtaskBtn";

function App() {
  let [myTasks, setMyTask] = useState([]);
  const [taskNum, setTaskNum] = useState(0);
  const [textBoxValueName, setTextBoxValueName] = useState("");
  const [textBoxValueDiscription, setTextBoxValueDiscription] = useState("");
  const [isBtnClicked, setBtnState] = useState(true);
  const [taskObject, setTaskObject] = useState({});
  const [DynamicSylesBorderPadding, setDynamicSylesBorderPadding] = useState(
    {}
  );
  const [Time, setTime] = useState(new Date());


  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update the time every second (1000 milliseconds)

    return () => {
      clearInterval(interval); // Cleanup the interval on component unmount
    };
  }, []);

  const formattedTime = Time.toLocaleTimeString();
  const formattedDate = Time.toLocaleDateString();


  useEffect(() => {
    setDynamicSylesBorderPadding(
      myTasks.length === 0
        ? { padding: "py-0", border: "border-0" }
        : { padding: "py-3", border: "border-top border-secondary" }
    );
  }, [myTasks]);

  const createTaskObject = (name, discription) => {
    const task = {
      name,
      discription,
    };
    setTaskObject(task);
  };

  const handleChangeName = (event) => {
    const value = event.target.value;
    setTextBoxValueName(value);
  };

  const handleChangeDiscription = (event) => {
    const value = event.target.value;
    setTextBoxValueDiscription(value);
  };

  const handleButtonClick = () => {
    setMyTask([...myTasks, taskObject]);
    setTextBoxValueName("");
    setTextBoxValueDiscription("");
    setTaskNum(taskNum + 1);
    setBtnState(true);
  };

  const handleButtonClickCancel = () => {
    setBtnState(true);
  };

  const deleteTask = (index, timeout, event) => {
    setTimeout(() => {
      const delitem = myTasks[index];
      setMyTask(myTasks.filter((myTasks) => myTasks !== delitem));
    }, timeout);
  };

  useEffect(() => {
    createTaskObject(textBoxValueName, textBoxValueDiscription);
  }, [textBoxValueName, textBoxValueDiscription]);

  return (
    <div className="container mt-5">
      <Header
        taskNum={taskNum}
        myTasks={myTasks}
        Time={formattedTime}
        Date={formattedDate}
      />
      <Tasklist
        myTasks={myTasks}
        deleteTask={deleteTask}
        DynamicSylesBorderPadding={DynamicSylesBorderPadding}
      >
        <Deletebutton deleteTask={deleteTask} />
      </Tasklist>
      <AddtaskBtn
        textBoxValueName={textBoxValueName}
        handleChangeName={handleChangeName}
        textBoxValueDiscription={textBoxValueDiscription}
        handleChangeDiscription={handleChangeDiscription}
        isBtnClicked={isBtnClicked}
        setBtnState={setBtnState}
        handleButtonClick={handleButtonClick}
        handleButtonClickCancel={handleButtonClickCancel}
        DynamicSylesBorderPadding={DynamicSylesBorderPadding}
      />
      {/* {console.log(currentDate)} */}
    </div>
  );
}

export default App;
