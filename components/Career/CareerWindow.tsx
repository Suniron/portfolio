import React from "react";
import WindowBox from "../WindowBox";
import { styled } from "stitches.config";
import { CareerStep, ICareerStep } from "./CareerStep";
import useSWR from "swr";

interface CareerWindowProps {
  show: boolean;
  handleClose: () => void;
}

const CareerSteps = styled("ul", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "$2",
});

const CareerStepsContainer = () => {
  const { data, error } = useSWR("/datas.json");

  if (error)
    return <p>"Il y a eu une erreur à la récupération des données."</p>;
  if (!data) return <p>"Chargement en cours ..."</p>;

  return (
    <CareerSteps>
      {(data.careerSteps as ICareerStep[]).map((step) => (
        <CareerStep
          key={step.activity + "_" + step.compagny}
          beginDate={step.beginDate}
          endDate={step.endDate}
          activity={step.activity}
          compagny={step.compagny}
          missions={step.missions}
        />
      ))}
    </CareerSteps>
  );
};
const CareerWindow: React.FC<CareerWindowProps> = ({ show, handleClose }) => {
  return (
    <WindowBox show={show} handleClose={handleClose} title="Parcours">
      <CareerStepsContainer />
    </WindowBox>
  );
};
export default CareerWindow;
