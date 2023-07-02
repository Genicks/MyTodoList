import { useEffect, useState } from "react";

export const Discription = (props) => {
  const { myTasks } = props;

  const [display, setDisplay] = useState(``);
  const [borderTopStyle, setBorderTopStyle] = useState(``);

  useEffect(() => {
    setDisplay(
      myTasks.discription !== "" ? `Discription: ${myTasks.discription}` : ""
    );
    setBorderTopStyle(
      myTasks.discription === ""
        ? "border-0 m-0 p-0"
        : `col-12 text-secondary mt-2 p-3 pb-2 border-top border-secondary`
    );
  }, [myTasks]);

  return <div className={borderTopStyle}>{display}</div>;
};
