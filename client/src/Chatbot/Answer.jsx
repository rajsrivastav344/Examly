import { useEffect, useState } from "react";
import { checkHeading, replaceHeadingStarts } from "./Helper";


const Answer = ({ ans, totalResult, index }) => {
  const [heading, setHeading] = useState(false);
  const [answer, setAnswer] = useState(ans);

  useEffect(() => {
    if (checkHeading(ans)) {
      setHeading(true);
      setAnswer(replaceHeadingStarts(ans));
    }
  }, [ans]);

  return (
    <div >
      {index === 0 && totalResult > 1 ? (
        <div style={{ paddingTop: "20px", fontSize: "21px", color: "white" }}>
          {answer}
        </div>
      ) : heading ? (
        <div style={{ paddingTop: "20px", fontSize: "20px", color: "white" }}>
          {answer}
        </div>
      ) : (
        <div
          style={{
            //paddingLeft: "20px",
            color: "white",
            display: "list-item",
            //listStyleType: "disc",
            marginLeft: "20px",
          }}
        >
          {answer}
        </div>
      )}
    </div>
  );
};

export default Answer;
