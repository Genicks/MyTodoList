function Addtask(props) {
  return (
    <div className="row">
      <div className="col">
        <input
          id="addTask"
          type="text"
          value={props.textBoxValue}
          onChange={props.handleChange}
          onClick={props.handleChange}
          className="form-control"
          placeholder="Add task"
        />
      </div>
      <div className="col">
        <button className="btn btn-primary" onClick={props.handleButtonClick}>
          Add task
        </button>
      </div>
    </div>
  );
}

export default Addtask;
