function Taskname(props) {
  let { index, myTasks, dynamicStyles } = props;

  return (
      <label htmlFor={`checkbox${index}`} className={`fs-5 row m-0 ${dynamicStyles.TaskStyles.color}`}>
        {myTasks[index].name}
      </label>
  );
}
export default Taskname;
