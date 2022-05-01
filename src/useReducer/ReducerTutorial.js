import React, { useReducer } from "react";
const ReducerTutorial = () => {
  const reducer = (state, action) => {
    console.log(state);
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1, showText: state.showText };
      case "toggleShowText":
        return { count: state.count, showText: !state.showText };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
  return (
    <div>
      {state.count}
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        Click here
      </button>
      {state.showText && <p>Show Text</p>}
    </div>
  );
};

export default ReducerTutorial;
