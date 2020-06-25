import React, { useState } from "react";
import { styled } from "styles";
import CareerWindow from "components/Windows/CareerWindow";
import ProjectWindow from "components/Windows/ProjectWindow";
import SkillWindow from "components/Windows/SkillWindow";

const LaunchContentDiv = styled.div((css) =>
  css.compose(
    css.absolute(),
    css.bg("gray-200"),
    css.rounded("sm"),
    css.border(2),
    css.border("blue-700")
  )
);

const ContentHeader = styled.div((css) =>
  css.compose(
    css.borderB(2),
    css.bg("blue-700"),
    css.p(1),
    css.text("white"),
    css.flex(),
    css.items("center"),
    css.w("full")
  )
);
const UserLogo = styled.img((css) =>
  css.compose(css.h(12), css.border(2), css.rounded("md"))
);
const UserName = styled.h2((css) =>
  css.compose(css.text("xl"), css.minW("full"), css.px(1))
);
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
          <LaunchContentDiv style={{ bottom: "2em" }}>
            <ContentHeader className="radient">
              <UserLogo src="/images/Etienne-Blanc.jpg" />
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
