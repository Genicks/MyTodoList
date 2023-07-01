import { useEffect, useState } from "react";

export const Discription = (props) => {
  const { myTasks, dynamicStyles } = props;

  const [display, setDisplay] = useState(``);
  const [borderTopStyle, setBorderTopStyle] = useState(``);

  useEffect(() => {
    setDisplay(
      myTasks.discription !== "" ? `Discription: ${myTasks.discription}` : ""
    );
    setBorderTopStyle(
      myTasks.discription === ""
        ? "border-0 m-0 p-0"
        : `col text-secondary mt-2 ps-4 pt-1 border-top border-secondary ${dynamicStyles.TaskStyles.color}`
    );
  }, [myTasks]);

  return <div className={borderTopStyle}>{display}</div>;
};
