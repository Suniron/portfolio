import React from "react";
import WindowBox from "../WindowBox";
import { IStep, StepElement, StepInfo, StepsList } from "./StepElements";
import datas from "../../public/datas.json";
interface CareerWindowProps {
  show: boolean;
  handleClose: () => void;
}

const Step: React.FC<IStep> = (props) => {
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

const StepsContainer = () => {
  const { careerSteps } = datas;

  return (
    <StepsList>
      {(careerSteps as IStep[]).map((step) => (
        <Step
          key={step.activity + "_" + step.compagny}
          beginDate={step.beginDate}
          endDate={step.endDate}
          activity={step.activity}
          compagny={step.compagny}
          missions={step.missions}
        />
      ))}
    </StepsList>
  );
};

const CareerWindow: React.FC<CareerWindowProps> = ({ show, handleClose }) => {
  return (
    <WindowBox show={show} handleClose={handleClose} title="Parcours">
      <StepsContainer />
    </WindowBox>
  );
};
export default CareerWindow;
