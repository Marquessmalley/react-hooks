import React, { useEffect, useLayoutEffect, useRef } from "react";

const LayoutEffectTutorial = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.value = "pedro";
  }, []);
  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);
  return (
    <div>
      <input
        type="text"
        placeholder="enter something.."
        value="marques"
        ref={inputRef}
      />
    </div>
  );
};

export default LayoutEffectTutorial;
