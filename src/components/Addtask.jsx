import "./customClass.css";

function Addtask(props) {
  return (
    <form onSubmit={props.handleButtonClick} className="container border bg-transparent border-secondary rounded-3">
        {/* ROW 1 */}
        <div className="row p-2 ">
          <input
            type="text"
            className="form-control c-fw-bold c-ph-light-subtle c-text-input"
            placeholder="Task name:"
            id="addTask"
            value={props.textBoxValueName}
            onChange={props.handleChangeName}
            onClick={props.handleChangeName}
          />
          <input
            type="text"
            className="form-control c-ph-light-subtle c-text-input"
            placeholder="Discription:"
            value={props.textBoxValueDiscription}
            onChange={props.handleChangeDiscription}
            onClick={props.handleChangeDiscription}
          />
        </div>
        {/* ROW 2 */}
        <div className="row d-flex align-items-center border-top p-1 border-secondary">
          <div className="col-auto">
            <input
              type="datetime-local"
              className="c-date-input"
              value={props.inputValueDate}
              onChange={props.handleChangeDate}
              onClick={props.handleChangeDate}
            />
          </div>
          <div className="col">
            <div className="row justify-content-end">
              <button
                className="btn btn-danger m-1 col-auto border-danger"
                onClick={props.handleButtonClickCancel}
                type="reset"
              >
                <i className="bi bi-x-lg"></i>
                Cancel
              </button>
              <button
                className="btn btn-success m-1 col-auto"
                type="submit"
              >
                <i className="bi bi-send"></i>
                Add task
              </button>
            </div>
          </div>
        </div>
    </form>
  );
}

export default Addtask;
