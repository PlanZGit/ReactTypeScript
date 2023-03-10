import { type } from "os";
import React from "react";

type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

function Greet(props: GreetProps) {
  const { messageCount = 0 } = props;

  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name}! You ahave ${props.messageCount} unread messages`
          : "Welcome Guest"}
      </h2>
    </div>
  );
}

export default Greet;
