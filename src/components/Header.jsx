function Header(props) {
  const array = props.myTasks;
  const length = array.length;

  return (
    <div className="row border-bottom border-secondary">
      <h1 className="col">Today {length}</h1>
    </div>
  );
}

export default Header;
