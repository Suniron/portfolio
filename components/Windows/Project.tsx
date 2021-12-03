import React from "react";
import { styled } from "stitches.config";
import { getRandomNumberBetween } from "utils/random.utils";

interface IProject {
  name: string;
  description?: string;
  link: string;
  imgLink: string;
}

export const ProjectElement = styled("a", {
  borderRadius: 8,
  margin: 8,
  padding: 10,
  textDecoration: "none",
  color: "black",
  display: "flex",
  flexDirection: "column",
  maxWidth: 250,
  "&active": {
    color: "black",
  },
});

const ProjectTitle = styled("h3", {});

const ProjectDescription = styled("p", {
  fontStyle: "oblique",
  fontSize: "$2",
});

const ProjectImg = styled("img", {
  borderRadius: 8,
  marginTop: 3,
});

const Project: React.FC<IProject> = (props) => {
  return (
    <ProjectElement
      css={{
        backgroundColor: [
          "darkcyan",
          "darkgray",
          "darkgoldenrod",
          "darkseagreen",
          "darkorange",
          "darksalmon",
        ][getRandomNumberBetween(0, 4)],
      }}
      href={props.link}
    >
      <ProjectTitle>{props.name}</ProjectTitle>
      {props.description ?? (
        <ProjectDescription>{props.description}</ProjectDescription>
      )}
      <ProjectImg src={props.imgLink} />
    </ProjectElement>
  );
};

export default Project;
