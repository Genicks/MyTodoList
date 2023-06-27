function Task(props) {
  let { index, deleteTask, myTasks } = props;

  function handleCheckboxChange(event) {
    const isChecked = event.target.checked;
    console.log(event);

    if (isChecked) {
      deleteTask(index, 1000, event);
      // myTasks[index].event.target.checked = false;
    }
  }

  return (
    <div className="row d-flex align-items-center">
      <div className="col-auto">
        <input
          id="task"
          type="checkbox"
          onChange={handleCheckboxChange}
          className="form-check-input fs-4 border-warning"
        />
      </div>

      <label htmlFor="task" className="px-0 fs-5 col-auto">
        {myTasks.name}
      </label>
    </div>
  );
}
export default Task;
