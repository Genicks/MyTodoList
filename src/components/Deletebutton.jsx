function Deletebutton(props) {
  let { index, deleteTask } = props;

  const delFunc = () => {
    deleteTask(index, 1000);
  };

  return (
    <button className="btn btn-danger col-auto mx-2" onClick={delFunc}>
      <i className="bi bi-trash3"></i>
    </button>
  );
}
export default Deletebutton;
