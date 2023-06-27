import { useEffect, useState } from "react";

export const Discription = (props) => {
  const { myTasks } = props;

  const [display, setDisplay] = useState(``);
  useEffect(() => {
    setDisplay(
      myTasks.discription !== "" ? `Discription: ${myTasks.discription}` : ""
    );
  }, [myTasks]);

  return `${display}`;
};
