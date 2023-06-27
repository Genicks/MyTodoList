import Addtask from "./Addtask";

export const AddtaskBtn = (props) => {
  const {
    isBtnClicked,
    setBtnState,
    textBoxValueName,
    handleChangeName,
    textBoxValueDiscription,
    handleChangeDiscription,
    handleButtonClick,
    handleButtonClickCancel,
    DynamicSylesBorderPadding
  } = props;

  return (
    <div>
      {isBtnClicked ? (
        <div className={DynamicSylesBorderPadding.border}>
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
          handleButtonClick={handleButtonClick}
          handleButtonClickCancel={handleButtonClickCancel}
        />
      )}
    </div>
  );
};
