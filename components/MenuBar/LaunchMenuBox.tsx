import React, { useState } from "react";
import { styled } from "stitches.config";
import CareerWindow from "components/Windows/CareerWindow";
import ProjectWindow from "components/Windows/ProjectWindow";
import SkillWindow from "components/Windows/SkillWindow";
import Image from "next/image";
import myPicture from "public/images/etienne-blanc.jpg";

const LaunchContentDiv = styled("div", {
  position: "absolute",
  backgroundColor: "ivory",
  borderRadius: 2,
  borderColor: "royalblue",
  borderWidth: 2,
  bottom: "2em",
});

const ContentHeader = styled("div", {
  borderWidth: "10",
  borderColor: "royalblue",
  boxShadow: "inset 0px 2px 5px white, inset 0px -5px 10px darkslategrey",
  backgroundColor: "royalblue",
  padding: 5,
  color: "white",
  alignItems: "center",
  width: "100%",
  display: "inline-flex",
});

const UserLogo = styled("div", {
  height: 60,
  width: 60,
  borderWidth: 2,
  borderRadius: 3,
});

const UserName = styled("h2", {
  fontSize: "$5",
  fontWeight: 300,
  paddingX: "$2",
});

const CvDiv = styled("div", { display: "flex", flexDirection: "column" });

const CvButton = styled("button", {
  textAlign: "left",
  paddingX: "$1",
  minHeight: 25,
  "&:focus": { outline: "none" },
  "&:hover": { backgroundColor: "rgb(226, 232, 240)" },
});

const Cv: React.FC = () => {
  const [showCareer, setShowCareer] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showSkills, setShowSkills] = useState(false);

  return (
    <CvDiv>
      <CvButton onClick={() => setShowCareer(true)}>Parcours</CvButton>
      <CvButton onClick={() => setShowProjects(true)}>Projets</CvButton>
      <CvButton onClick={() => setShowSkills(true)}>Compétences</CvButton>
      <CareerWindow
        show={showCareer}
        handleClose={() => setShowCareer(false)}
      />
      <ProjectWindow
        show={showProjects}
        handleClose={() => setShowProjects(false)}
      />
      <SkillWindow show={showSkills} handleClose={() => setShowSkills(false)} />
    </CvDiv>
  );
};

const LaunchMenuBox: React.FC<{
  show: boolean;
}> = ({ show }) => {
  return (
    <>
      {show && (
        <div>
          <LaunchContentDiv>
            <ContentHeader>
              <UserLogo>
                <Image
                  height={60}
                  width={60}
                  src={myPicture}
                  alt="Picture of Mr BLANC"
                />
              </UserLogo>
              <UserName>Etienne Blanc</UserName>
            </ContentHeader>
            <Cv />
          </LaunchContentDiv>
        </div>
      )}
    </>
  );
};

export default LaunchMenuBox;
