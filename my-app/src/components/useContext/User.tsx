import React, { useContext, useState } from "react";
import { AuthUser } from "./UserContext";
import { UserContext } from "./UserContext";

//Context is always create outside
//Future Value is set inside component
export const User = () => {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
    userContext.setUser({
      name: "Viswas",
      email: "viswas@example.com",
    });
  };

  const handleLogout = () => {
    userContext.setUser(null);
  };

  // One thing we can improve
  // userContext?.user?.name check is it exist everytime
  // What we can do is use type assertion

  //We can now remove the null checking... 2 line down
  //   const handleLogout = () => {
  //     if (userContext) {
  //       userContext.setUser(null);
  //     }
  //   };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is{userContext?.user?.name}</div>
      <div>User email is{userContext?.user?.email}</div>
    </div>
  );
};
