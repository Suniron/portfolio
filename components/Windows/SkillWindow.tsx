import React from "react";
import WindowBox from "../WindowBox";

interface ProjectWindowProps {
  show: boolean;
  handleClose: () => void;
}

const ProjectWindow: React.FC<ProjectWindowProps> = ({ show, handleClose }) => {
  return (
    <WindowBox show={show} handleClose={handleClose} title="Projets">
      <p>
        TODO: Mettre tous mes compétences ici, classées par domaine. Ajouter une
        barre de recherche pour chercher une compétence précise
      </p>
    </WindowBox>
  );
};
export default ProjectWindow;
