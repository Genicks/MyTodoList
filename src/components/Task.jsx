function Task(props) {
  let { index, deleteTask, myTasks } = props;

  function handleCheckboxChange(event) {
    const isChecked = event.target.checked;
    const checkboxbelow = document.getElementById(`checkbox${index}`);

    if (isChecked) {
      deleteTask(index, 1000, event);
      // console.log(myTasks)
    }

    setTimeout(() => {
      checkboxbelow.checked = false;
    }, 1000);
  }

  return (
    <div className="col-auto">
      <div className="row d-flex align-items-center">
        <div className="col-auto">
          <input
            id={`checkbox${index}`}
            type="checkbox"
            onChange={handleCheckboxChange}
            className="form-check-input fs-4 border-secondary col rounded-circle bg-transparent border-2"
          />
        </div>

        <label htmlFor="task" className="px-0 fs-5 col-auto">
          {myTasks[index].name}
        </label>
      </div>
    </div>
  );
}
export default Task;
