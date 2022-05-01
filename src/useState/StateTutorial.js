import React, { useState } from "react";

const StateTutorial = () => {
  // COUNTER EXAMPLE
  //   const [counter, setCounter] = useState(0);
  //   const increment = () => {
  //     // setCounter((prevCounter) => prevCounter + 1);
  //     // OR
  //     setCounter(counter + 1);
  //   };

  // INPUT EXAMPLE
  const [inputValue, setInputVaule] = useState("Marques");
  const onInputChange = (e) => {
    setInputVaule(e.target.value);
  };
  return (
    <div>
      {/* {counter}
      <button onClick={increment}>Increment</button> */}
      <input
        type="text"
        placeholder="enter something.."
        onChange={onInputChange}
      />
      {inputValue}
    </div>
  );
};

export default StateTutorial;
