import React from "react";
import styled from "styled-components";
import useClock from "@/hooks/useClock";
import { Circle } from "./Circle";
import Hands from "./Hands";
import { ClockType } from "./BeijingClock";

const Mark = styled.div<{ rotation: string }>`
  position: absolute;
  border-radius: 100px;
  top: 10px;
  left: 50%;
  text-align: center;
  transform: translate3d(-50%, 0, 0)
    rotate(${(props) => props.rotation || "0deg"});
  transform-origin: center 140px;
`;

const marks = Array(12).fill(0);

const Clock = ({ className, size }: ClockType) => {
  const time = useClock("new-delhi");

  return (
    <Circle size={size} className={className}>
      {marks.map((_, i) => (
        <Mark key={i} rotation={i * 30 + "deg"}>
          {i === 0 ? 12 : i}
        </Mark>
      ))}
      <Hands time={time} borderWidth={0} />
    </Circle>
  );
};

const NewDelhiClock = styled(Clock)`
  position: relative;
  box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.15);
  background: white;
`;

export default NewDelhiClock;
