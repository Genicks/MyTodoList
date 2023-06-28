export const DueDate = (Props) => {
  const { myTasks } = Props;

  return (
    <div className="col">
      {myTasks.date ? (
        <div className="row  d-flex align-items-center text-success">
          <i className="bi bi-dot col-auto pe-0"></i>
          <div className="col-auto p-0 m-0 ">{myTasks.date}</div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
