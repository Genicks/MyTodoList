export function Header(props) {
  return (
    <div className="row">
      <h1 className="col">Todoist {props.taskNum}</h1>
    </div>
  );
}

export default Header;
