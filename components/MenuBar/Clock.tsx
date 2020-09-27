import React, { useState, useEffect } from "react";
import { styled } from "stitches.config";

const fixFirstZero = (minutes: number): string => {
  const minutesToString = minutes.toString();
  if (minutesToString.length === 1) {
    return "0" + minutesToString;
  }
  return minutesToString;
};

const ClockText = styled.p({ color: "white" });
export const Clock: React.FC = () => {
  const [time, setTime] = useState(new Date(Date.now()));

  // set time every second:
  useEffect(() => {
    const checkEachSecond = setInterval(
      () => setTime(new Date(Date.now())),
      1000
    );
    return () => clearInterval(checkEachSecond);
  });
  return (
    <ClockText>
      {time.getHours() + ":" + fixFirstZero(time.getMinutes())}
    </ClockText>
  );
};
