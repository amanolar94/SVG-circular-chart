import React from "react";
import CircularChart from "./CircularChart.js";
const CircleChart = props => {
  const width = props.width;
  const d = width - 60;
  const r = d / 2;
  const percentage = 2 * Math.PI * r;
  const amountInPercentage = (
    (100 * props.amountFilled) /
    (props.base || 100)
  ).toFixed(0);
  const amountFilled = (percentage * props.amountFilled) / (props.base || 100);
  const path = `M${width / 2} ${(width - d) / 2}    
                a ${r} ${r} 0 0 1 0 ${d}     
                a ${r} ${r} 0 0 1 0 -${d}`;
  const filled = `${amountFilled},${percentage}`;
  const newProps = {
    path: path,
    d: d,
    r: r,
    amountInPercentage: amountInPercentage,
    amountFilled: props.amountFilled,
    filled: filled,
    dashOffsetAmount: amountFilled
  };
  return (
    <>
      {props.width &&
        props.amountFilled && <CircularChart {...{ ...props, ...newProps }} />}
    </>
  );
};

export default CircleChart;
