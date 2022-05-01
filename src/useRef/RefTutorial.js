import React, { useState, useRef } from "react";

const RefTutorial = () => {
  const [entered, setEntered] = useState("");
  const [isEntered, setIsEntered] = useState(false);
  const inputRef = useRef(null);

  const onClick = () => {
    setEntered(inputRef.current.value);
    setIsEntered(true);
    inputRef.current.value = "";
  };
  return (
    <div>
      {isEntered && <h1>{entered}</h1>}
      <input type="text" placeholder="Enter something.." ref={inputRef} />
      <button onClick={onClick}>Add</button>
    </div>
  );
};

export default RefTutorial;
