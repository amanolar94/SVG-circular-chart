import styled from "styled-components";

export const Chart = styled.svg`
  height: ${props => props.width};
  width: ${props => props.width};
`;
export const MainPath = styled.path`
  fill: none;
  stroke-dasharray: ${props => props.strokeFilled};
  stroke-dashoffset: 0;
  animation: fill 1s ease-in-out;
  @keyframes fill {
    from {
      stroke-dashoffset: ${props => props.dashOffsetAmount};
    }
    to {
      stroke-dashoffset: 0;
    }
  }
`;
export const BackgrounPath = styled.path`
  fill: none;
`;
export const MainText = styled.text`
  text-anchor: middle;
  font-weight: normal;
`;
export const LabelText = styled.text`
  text-anchor: middle;
  font-weight: normal;
`;
