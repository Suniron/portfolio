import React from "react";
import WindowBox from "../WindowBox";

interface ProjectWindowProps {
  show: boolean;
  handleClose: () => void;
}

const ProjectWindow: React.FC<ProjectWindowProps> = ({ show, handleClose }) => {
  return (
    <WindowBox show={show} handleClose={handleClose} title="Projets">
      <p>TODO: Mettre tous les projets ici !</p>
    </WindowBox>
  );
};
export default ProjectWindow;
