import React, { useState, useEffect, useRef } from "react";

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer2: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = (targetDate: Date) => {
    const now = new Date().getTime();
    const target = new Date(targetDate).getTime();
    const difference = target - now;

    if (difference <= 0) return 0;
    return Math.floor(difference / 1000);
  };

  const [secondsRemaining, setSecondsRemaining] = useState<number>(calculateTimeLeft(targetDate));
  const [showConfetti, setShowConfetti] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // // Only start interval if there's time remaining
    if (secondsRemaining > 0) {
      intervalRef.current = setInterval(() => {
        const timeLeft = calculateTimeLeft(targetDate);
        setSecondsRemaining((prevSeconds) => prevSeconds - 1);

        // Stop when reaching zero
        if (timeLeft <= 0) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
          setShowConfetti(true);
        }
      }, 1000);
    }

    // Cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [secondsRemaining]); // Empty dependency array - only run once on mount

  const formatTime = (totalSeconds: number): string => {
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const pad = (num: number) => String(num).padStart(2, "0");

    if (days > 0) {
      return `${days}d ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] pb-4">
      <div className="relative">
        <h2 className="text-8xl md:text-[200px] font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {formatTime(secondsRemaining)}
        </h2>

        {secondsRemaining > 0 && secondsRemaining <= 10 && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-red-500 font-semibold animate-pulse">
            Almost there!
          </div>
        )}
      </div>

      {secondsRemaining === 0 && (
        <div className="mt-8 text-center animate-fade-in">
          {showConfetti && <div className="text-6xl mb-4 animate-bounce">🎉 🎊 ✨</div>}
          <p className="text-4xl md:text-5xl font-bold text-green-600 mb-6">The event has begun! 🚀</p>
          {secondsRemaining == 0 && (
            <button
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              onClick={() => {
                setSecondsRemaining(calculateTimeLeft(new Date(Date.now() + 10 * 1000)));
              }}
            >
              Reset Timer (Add 10s)
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default CountdownTimer2;
