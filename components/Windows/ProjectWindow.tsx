import Alert from "components/Alert";
import React from "react";
import WindowBox from "../WindowBox";

interface ProjectWindowProps {
  show: boolean;
  handleClose: () => void;
}

const ProjectWindow: React.FC<ProjectWindowProps> = ({ show, handleClose }) => {
  return (
    <WindowBox show={show} handleClose={handleClose} title="Projets">
      <>
        <Alert>
          En tant qu'autodidacte passioné, j'ai mené de nombreux projets: vous
          trouverez ici les principaux! 😁
        </Alert>
      </>
    </WindowBox>
  );
};
export default ProjectWindow;
