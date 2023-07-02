const Checkbox = (props) => {
  const { index, dynamicStyles, deleteTask } = props;

  function handleCheckboxChange(event) {
    const isChecked = event.target.checked;
    const checkboxbelow = document.getElementById(`checkbox${index}`);

    if (isChecked) {
      deleteTask(index, 1000, event);
    }

    setTimeout(() => {
      checkboxbelow.checked = false;
    }, 1000);
  }

  return (
    <div className="col-1 p-0 m-0 d-flex justify-content-center">
      <input
        id={`checkbox${index}`}
        type="checkbox"
        onChange={handleCheckboxChange}
        className={`form-check-input fs-2 m-0 border-secondary rounded-circle bg-transparent border-2 ${dynamicStyles.TaskStyles.color}`}
      />
    </div>
  );
};
export default Checkbox;
