import Header from "./Header";
import Tasklist from "./Tasklist";
import { useEffect, useState } from "react";
import Deletebutton from "./Deletebutton";
import { AddtaskBtn } from "./AddtaskBtn";

function App() {
  let [myTasks, setMyTask] = useState([]);
  const [taskObject, setTaskObject] = useState({});

  const [taskNum, setTaskNum] = useState(0);
  const [textBoxValueName, setTextBoxValueName] = useState("");
  const [textBoxValueDiscription, setTextBoxValueDiscription] = useState("");
  const [inputValueDate, setinputValueDate] = useState("");
  const [isBtnClicked, setBtnState] = useState(true);
  const [dynamicStyles, setdynamicStyles] = useState({
    ATBStyles: { padding: "py-0", border: "border-0" },
    TaskStyles: { color: "text-warning border-warning" },
  });

  const [currentDate, setCurrentDate] = useState(new Date());
  const [yesterday, setYesterday] = useState(new Date());
  const [tomorrow, setTomorrow] = useState(new Date());
  const [inputDate, setInputDate] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const tempYesterday = new Date();
    tempYesterday.setDate(currentDate.getDate() - 1);
    setYesterday(tempYesterday);
  }, []);

  useEffect(() => {
    const tempTomorrow = new Date();
    tempTomorrow.setDate(currentDate.getDate() + 1);
    setTomorrow(tempTomorrow);
  }, []);

  const createTaskObject = (name, discription, date, inputDate) => {
    const task = {
      name,
      discription,
      date,
      inputDate,
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

  const handleChangeDate = (event) => {
    const value = event.target.value;
    setinputValueDate(value);

    const inputDate = new Date(value);
    setInputDate(inputDate);
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
    const isObject =
      typeof inputDate === "object"
        ? inputDate.toLocaleString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })
        : "";
    const isObject2 = typeof inputDate === "object" ? inputDate : "";

    createTaskObject(
      textBoxValueName,
      textBoxValueDiscription,
      isObject,
      isObject2
    );
  }, [textBoxValueName, textBoxValueDiscription, inputValueDate, inputDate]);

  return (
    <div className="container mt-5">
      <Header
        taskNum={taskNum}
        myTasks={myTasks}
        Time={currentDate.toLocaleTimeString()}
        Date={currentDate.toLocaleDateString()}
      />
      <Tasklist
        myTasks={myTasks}
        deleteTask={deleteTask}
        dynamicStyles={dynamicStyles}
        yesterday={yesterday}
        today={currentDate}
        tomorrow={tomorrow}
        inputDate={inputDate}
      >
        <Deletebutton deleteTask={deleteTask} />
      </Tasklist>
      <AddtaskBtn
        textBoxValueName={textBoxValueName}
        handleChangeName={handleChangeName}
        textBoxValueDiscription={textBoxValueDiscription}
        handleChangeDiscription={handleChangeDiscription}
        inputValueDate={inputValueDate}
        handleChangeDate={handleChangeDate}
        isBtnClicked={isBtnClicked}
        setBtnState={setBtnState}
        handleButtonClick={handleButtonClick}
        handleButtonClickCancel={handleButtonClickCancel}
        dynamicStyles={dynamicStyles}
        myTasks={myTasks}
      />
    </div>
  );
}

export default App;