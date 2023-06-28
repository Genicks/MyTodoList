import { useEffect, useState } from "react";

function Header(props) {
  let { myTasks, Time, Date } = props;
  const array = myTasks;
  const length = array.length;

  return (
    <div className="row border-bottom border-secondary">
      <h1 className="col">
        Today ({length})
        <div className="text-success fs-4 my-2">
          {Date}
          <span className="text-"> <i className="bi bi-dash"></i> </span>
          {Time}
        </div>
      </h1>
    </div>
  );
}

export default Header;
