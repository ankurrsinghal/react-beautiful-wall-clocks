import React from "react";
import styled from "styled-components";
import useClock from "@/hooks/useClock";
import { Circle } from "./Circle";
import Hands from "./Hands";
import { ClockType } from "./BeijingClock";

const marks = Array(12).fill(0);

const Mark = styled.div<{ rotation: string }>`
  position: absolute;
  border-radius: 100px;
  top: 10px;
  left: 50%;
  text-align: center;
  transform: translate3d(-50%, 0, 0)
    rotate(${(props) => props.rotation || "0deg"});
  transform-origin: center 130px;
`;

const getRomanNumeral = (index: number) => {
  const numerals = [
    "XII",
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
    "XI",
  ];

  return numerals[index];
};

const Clock = ({ className, size }: ClockType) => {
  const time = useClock("tokyo");

  return (
    <Circle size={size} className={className}>
      {marks.map((_, i) => {
        return (
          <Mark key={i} rotation={i * 30 + "deg"}>
            {getRomanNumeral(i)}
          </Mark>
        );
      })}
      <Hands time={time} borderWidth={10} />
    </Circle>
  );
};

const TokyoClock = styled(Clock)`
  position: relative;
  border: 10px solid black;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export default TokyoClock;
