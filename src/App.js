import React, { useState } from "react";
import "./style.css";
import { Login } from "./login.js";
import { ShowProfile } from "./showProfile.js";
import { LoginContext } from "./loginContext.js";
export default function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [userName, setUserName] = useState("");
  return (
    <div className="container">
      <LoginContext.Provider value={{ userName, setUserName, setShowProfile }}>
        {showProfile ? <ShowProfile /> : <Login />}
      </LoginContext.Provider>
    </div>
  );
}
