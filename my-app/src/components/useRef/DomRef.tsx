import React, { useEffect, useRef } from "react";

const DomRef = () => {
  //Define our ref element input <HTMLInputElement> , add null! if we know it will never not exist
  const inputRef = useRef<HTMLInputElement>(null!);

  //Optional chaining inputRef.current?.focus();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef}></input>
    </div>
  );
};

export default DomRef;
