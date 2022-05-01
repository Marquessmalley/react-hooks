import React, { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";

export const appContext = createContext();
const ContextTutorial = () => {
  const [username, setUsername] = useState("");
  return (
    <appContext.Provider value={{ username, setUsername }}>
      <Login />
      <User />
    </appContext.Provider>
  );
};

export default ContextTutorial;
