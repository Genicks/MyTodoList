function Checkbox(props) {
  let { index, deleteTask } = props;

  function handleCheckboxChange(event) {
    const isChecked = event.target.checked;

    if (isChecked) {
          deleteTask(index, 1000);
    }
  }


  return <input type="checkbox" onChange={handleCheckboxChange} />;
}
export default Checkbox;
