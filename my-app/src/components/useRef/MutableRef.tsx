import React, { useState, useRef, useEffect } from "react";

const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  //Fix first error of useRef by setting type <number | null>
  const interValRef = useRef<number | null>(null);

  //Fix first error by setting useRef<number | undefined >(undefined) or if it exist check
  const stopTimer = () => {
    if (interValRef.current) window.clearInterval(interValRef.current);
  };

  useEffect(() => {
    // we are setting interValRef to the window.setInterval return id
    interValRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);

    return () => {
      stopTimer();
    };
  }, []);

  return (
    <div>
      HookTimer - {timer} -
      <button onClick={() => stopTimer()}>Stop Timer</button>
    </div>
  );
};

export default MutableRef;
