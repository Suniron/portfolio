import React from "react";
import WindowBox from "../WindowBox/";
import { styled } from "styles";

interface CareerWindowProps {
  show: boolean;
  handleClose: () => void;
}

const MyCareerSvg = styled.img((css) => css.compose());

const CareerWindow: React.FC<CareerWindowProps> = ({ show, handleClose }) => {
  return (
    <WindowBox show={show} handleClose={handleClose} title="Parcours">
      <MyCareerSvg src="/images/monparcours.svg" />
    </WindowBox>
  );
};
export default CareerWindow;
