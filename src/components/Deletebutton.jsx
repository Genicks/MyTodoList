function Deletebutton(props) {
  let { index, deleteTask } = props;

  const delFunc = () => {
    deleteTask(index, 1000);
  };

  return (
    <div className="col-1 p-0 d-flex justify-content-center" >
      <button className="btn btn-danger p-2 py-1" onClick={delFunc}>
        <i className="bi bi-trash3
        "></i>
      </button>
    </div>
  );
}
export default Deletebutton;

