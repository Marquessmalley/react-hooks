import React, { useState, useCallback } from "react";
import Child from "./Child";
const CallbackTutorial = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("this is data");

  const returnComment = useCallback(() => {
    return data;
  }, [data]);

  return (
    <div>
      <Child returnComment={returnComment} />
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {" "}
        toggle
      </button>
      {toggle && <p>toggled</p>}
    </div>
  );
};

export default CallbackTutorial;
