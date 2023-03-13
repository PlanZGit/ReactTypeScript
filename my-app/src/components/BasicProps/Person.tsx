import React from "react";
import { PersonProps } from "./Person.types";

function Person(props: PersonProps) {
  const { first, last } = props.name;
  return (
    <div>
      {first} {last}
    </div>
  );
}

export default Person;
