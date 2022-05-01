import React, { useContext } from "react";
import { appContext } from "./ContextTutorial";
const Login = () => {
  const { setUsername } = useContext(appContext);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
    </div>
  );
};

export default Login;
