import React from "react";
import WindowBox from "./../WindowBox";

interface CareerWindowProps {
  show: boolean;
  handleClose: () => void;
}

const CareerWindow: React.FC<CareerWindowProps> = ({ show, handleClose }) => {
  return (
    <WindowBox show={show} handleClose={handleClose} title="Parcours">
      <p>Ici ira son parcours</p>
    </WindowBox>
  );
};
export default CareerWindow;
