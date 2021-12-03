import Alert from "components/Alert";
import React from "react";
import { styled } from "stitches.config";
import WindowBox from "../WindowBox";
import Project from "./Project";
import datas from "public/datas.json";

interface ProjectWindowProps {
  show: boolean;
  handleClose: () => void;
}

const ProjectList = styled("div", {
  display: "flex",
  flexFlow: "wrap",
  placeContent: "center",
});

const ProjectWindow: React.FC<ProjectWindowProps> = ({ show, handleClose }) => {
  const { projects } = datas;

  return (
    <WindowBox show={show} handleClose={handleClose} title="Projets">
      <>
        <Alert>
          En tant qu'autodidacte passionné, j'ai mené de nombreux projets: vous
          trouverez ici les principaux! 😁
        </Alert>

        <ProjectList>
          {projects.map(
            (project: {
              name: string;
              link: string;
              description: string;
              imgLink: string;
            }) => (
              <Project key={project.name + "-tile"} {...project} />
            )
          )}
        </ProjectList>
      </>
    </WindowBox>
  );
};
export default ProjectWindow;
