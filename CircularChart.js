import React from "react";
import {
  Chart,
  MainPath,
  BackgrounPath,
  MainText,
  LabelText
} from "./styles.js";

const CircularChart = props => {
  return (
    <Chart height={props.width} width={props.width}>
      <BackgrounPath
        d={props.path}
        stroke={props.backgroundColor || "transparent"}
        strokeWidth={props.BackgroundLineWidth || props.MainLineWidth}
      />
      <MainPath
        d={props.path}
        stroke={props.color}
        strokeWidth={props.MainLineWidth}
        amountFilled={props.amountFilled}
        strokeFilled={props.filled}
        dashOffsetAmount={props.dashOffsetAmount}
        strokeLinecap={props.roundedEdge ? "round" : "butt"}
      />
      <MainText x="50%" y="50%" fontSize={props.d / 4} fill={props.numberColor}>
        <tspan>
          {props.amountFilledDisplay &&
            (props.displayInPercentage
              ? `${props.amountInPercentage}%`
              : props.amountFilled)}
        </tspan>
      </MainText>
      <LabelText x="50%" y="50%" fill={props.labelColor}>
        <tspan dy="4vh" fontSize={props.d / 14}>
          {props.labelText}
        </tspan>
      </LabelText>
    </Chart>
  );
};

export default CircularChart;
