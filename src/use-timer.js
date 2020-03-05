import { useState, useEffect } from "react";

export function useTimer() {
  const [seconds, setSeconds] = useState(0);
  const [isStop, setIsStop] = useState(true);

  useEffect(() => {
    let interval;
    if (isStop) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [seconds, isStop]);

  const resume = () => {
    setIsStop(true);
  };
  const stop = () => {
    setIsStop(false);
  };
  const reset = () => {
    setSeconds(0);
  };
  return { seconds, resume, stop, reset };
}
