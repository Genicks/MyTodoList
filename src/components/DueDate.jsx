export const DueDate = (Props) => {
  const { myTasks, dynamicStyles } = Props;
  {console.log(myTasks)}

  return (
    <div className="col">
      {myTasks.date === "" || myTasks.date === "Invalid Date" ? (
        <div></div>
      ) : (
        <div
          className={`row  d-flex align-items-center ${dynamicStyles.TaskStyles.color}`}
        >
          <i className="bi bi-dot col-auto pe-0"></i>
          <div className="col-auto p-0 m-0 ">{myTasks.date}</div>
        </div>
      )}
    </div>
  );
};
