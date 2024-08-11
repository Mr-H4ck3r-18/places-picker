import { useEffect, useState } from "react";

export default function ProgressBar({ time }) {
  const [rmngTime, setRmngTime] = useState(time);

  useEffect(() => {
    const interval = setInterval(() => {
      setRmngTime((prev) => prev - 10);
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <progress value={rmngTime} max={time} />;
}
