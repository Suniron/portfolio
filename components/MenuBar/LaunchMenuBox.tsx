import React, { useState, SetStateAction } from "react";
import { styled } from "styles";
import CareerWindow from "components/Windows/CareerWindow";
import ProjectWindow from "components/Windows/ProjectWindow";

const LaunchContentDiv = styled.div((css) =>
  css.compose(css.absolute(), css.bg("gray-200"), css.p(2), css.rounded("sm"))
);

const ContentHeader = styled.div((css) => css.compose(css.borderB(2)));
const ContentTitle = styled.h2((css) => css.compose(css.text("xl")));

const CvDiv = styled.div((css) => css.compose(css.flex(), css.flex("col")));
const CvButton = styled.button((css) =>
  css.compose(
    css.text("left"),
    css.px(1),
    css.outline("none", ":focus"),
    css.bg("gray-300", ":hover")
  )
);

const Cv: React.FC = () => {
  const [showCareer, setShowCareer] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  return (
    <CvDiv>
      <CvButton onClick={() => setShowCareer(true)}>Parcours</CvButton>
      <CvButton onClick={() => setShowProjects(true)}>Projets</CvButton>
      <CvButton>Expériences</CvButton>
      <CareerWindow
        show={showCareer}
        handleClose={() => setShowCareer(false)}
      />
      <ProjectWindow
        show={showProjects}
        handleClose={() => setShowProjects(false)}
      />
    </CvDiv>
  );
};

const LaunchMenuBox: React.FC<{
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ show, setShow }) => {
  return (
    <>
      {show ? (
        <LaunchContentDiv
          style={{ bottom: "2em", display: show ? "" : "none" }}
          onBlur={() => setShow(false)}
        >
          <ContentHeader>
            <ContentTitle>Etienne Blanc</ContentTitle>
          </ContentHeader>
          <Cv />
        </LaunchContentDiv>
      ) : null}
    </>
  );
};

export default LaunchMenuBox;
