import { useEffect } from "react";
import Addtask from "./Addtask";

export const AddtaskBtn = (props) => {
  const {
    isBtnClicked,
    setBtnState,
    textBoxValueName,
    handleChangeName,
    textBoxValueDiscription,
    handleChangeDiscription,
    inputValueDate,
    handleChangeDate,
    handleButtonClick,
    handleButtonClickCancel,
    dynamicStyles,
    myTasks,
  } = props;

  useEffect(() => {
    const border =
      myTasks.length === 0 ? "border-0" : "border-top border-secondary";
    dynamicStyles.ATBStyles.border = border;
  }, [myTasks, dynamicStyles.ATBStyles]);

  return (
    <div>
      {isBtnClicked ? (
        //! Dynamic styles border
        <div className={dynamicStyles.ATBStyles.border}>
          <button
            className="btn text-success"
            onClick={() => {
              setBtnState(false);
            }}
          >
            <i className="bi bi-plus-circle-fill"></i> Add task
          </button>
        </div>
      ) : (
        <Addtask
          textBoxValueName={textBoxValueName}
          handleChangeName={handleChangeName}
          textBoxValueDiscription={textBoxValueDiscription}
          handleChangeDiscription={handleChangeDiscription}
          inputValueDate={inputValueDate}
          handleChangeDate={handleChangeDate}
          handleButtonClick={handleButtonClick}
          handleButtonClickCancel={handleButtonClickCancel}
        />
      )}
    </div>
  );
};
