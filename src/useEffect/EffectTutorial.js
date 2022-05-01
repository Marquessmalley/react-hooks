import React, { useEffect, useState } from "react";
import axios from "axios";
const EffectTutorial = () => {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      setData(res.data[0].email);
      console.log("api was called");
    });
  }, [count]);
  return (
    <div>
      <p>Hello{data}</p>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        {count}
      </button>
    </div>
  );
};

export default EffectTutorial;
