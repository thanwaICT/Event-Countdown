import React, { useState, useEffect, useRef } from "react";
import "tailwindcss";

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const getSecond = (targetDate: Date) => {
    const now = Date.now(); // Current time in milliseconds
    const targetTime = targetDate.getTime();
    // const targetTime = targetDate.getTime() - 7 * 60 * 60 * 1000; // minus 7 hours to Target date in milliseconds
    if (targetTime - now <= 0) return 0; // if minus time is negative return 0 sec
    const differenceInMilliseconds = Math.abs(targetTime - now); // Absolute difference
    const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);
    return differenceInSeconds;
  };

  const [secondsRemaining, setSecondsRemaining] = useState<number>(getSecond(targetDate));
  const timerId = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Start the countdown when the component mounts or initialSeconds changes
    if (secondsRemaining > 0) {
      timerId.current = setInterval(() => {
        setSecondsRemaining((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    // Clear the interval when the component unmounts or secondsRemaining reaches 0
    return () => {
      if (timerId.current) {
        clearInterval(timerId.current);
      }
    };
  }, [secondsRemaining]); // Re-run effect when secondsRemaining changes

  // Stop the timer when it reaches zero
  useEffect(() => {
    if (secondsRemaining === 0 && timerId.current) {
      clearInterval(timerId.current);
    }
  }, [secondsRemaining]);

  const formatTime = (totalSeconds: number): string => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const pad = (num: number, size = 2) => String(num).padStart(size, "0");

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };

  return (
    <div className="pb-4">
      <h2 className="w-full text-[200px]">{formatTime(secondsRemaining)}</h2>
      {secondsRemaining === 0 && (
        <div>
          <p className="text-[40px]">The event has begun...</p>
          <button
            className="!bg-blue-300"
            onClick={() => {
              setSecondsRemaining(getSecond(new Date(Date.now() + 10 * 1000)));
            }}
          >
            {" "}
            Reset Timer{" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
