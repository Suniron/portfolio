import React from "react";
import { styled } from "stitches.config";

export interface ICareerStep {
  beginDate: string;
  endDate?: string;
  compagny: string;
  activity: string;
  missions: string[];
}

const StepElement = styled("li", {
  display: "block",
  padding: "$3",
  margin: "$2",
  borderRadius: "12px",
  backgroundColor: "lightblue",
  width: "fit-content",
  boxShadow: "0px 3px 10px grey",
});

const StepInfo = styled("p", {
  variants: {
    style: {
      title: { fontWeight: "bold", fontSize: 22 },
      subtitle: { fontSize: 20 },
      little: { fontSize: 14 },
      info: { fontStyle: "italic" },
    },
  },
});

export const CareerStep = (props: ICareerStep): FC => {
  return (
    <StepElement>
      <StepInfo style="info">
        {props.beginDate} {"→ "}
        {props.endDate}
      </StepInfo>
      <StepInfo style="title">{props.compagny}</StepInfo>
      <StepInfo style="subtitle">{props.activity}</StepInfo>
      {props.missions.length > 0 && (
        <div>
          {props.missions.map((mission) => (
            <StepInfo style="little" key={mission}>
              - {mission}
            </StepInfo>
          ))}
        </div>
      )}
    </StepElement>
  );
};
