import React, { useContext } from "react";
import { LoginContext } from "./loginContext.js";

export function Login() {
  const { setUserName, setShowProfile } = useContext(LoginContext);
  const handleChange = event => {
    setUserName(event.target.value);
  };
  return (
    <div>
      <div>
        UserName : <input onChange={() => handleChange(event)} />
      </div>
      <div>
        Password : <input />
      </div>
      <button
        onClick={() => {
          setShowProfile(true);
        }}
      >
        {" "}
        Login{" "}
      </button>
    </div>
  );
}
