import React from "react";
import WindowBox from "./../WindowBox";

interface CareerWindowProps {
  show: boolean;
  handleClose: () => void;
}

const CareerWindow: React.FC<CareerWindowProps> = ({ show, handleClose }) => {
  if (!show) {
    return null;
  }
  return (
    <WindowBox handleClose={handleClose} title="Parcours">
      <p>Ici ira son parcours</p>
    </WindowBox>
  );
};
export default CareerWindow;
