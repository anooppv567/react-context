import React, { useContext } from "react";
import { LoginContext } from "./loginContext";
export function ShowProfile() {
  const { userName } = useContext(LoginContext);
  return (
    <div>
      <h1> Profile</h1>
      <div>User Name:{userName}</div>
    </div>
  );
}
