import React, { useEffect, useState } from "react";

export default function Timer({ limit, unit }) {
  const [time, setTime] = useState(unit === "minutes" ? limit * 60 : limit);
  useEffect(() => {
    const interval =  setInterval(() => {
      console.log('live' +time);
      setTime((time) => time - 1)}, 1000);
    return () => clearInterval(interval)
  }, []);
  return (
    <span>{`${Math.floor(time / 60)}:${((time % 60) + "").padStart(
      2,
      "0"
    )} minutes`}</span>
  );
}
