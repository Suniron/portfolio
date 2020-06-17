import React, { useState } from "react";
import { styled } from "../../styles";
import CareerWindow from "components/Windows/CareerWindow";

const LaunchMenuDiv = styled.div((css) => css.compose(css.inlineBlock()));
const LaunchButton = styled.button((css) =>
  css.compose(
    css.border(2),
    css.px(1),
    css.rounded("md"),
    css.outline("none", ":focus"),
    css.bg("gray-400"),
    css.bg("gray-500", ":hover")
  )
);
const LaunchContentDiv = styled.div((css) =>
  css.compose(
    css.absolute(),
    css.bg("gray-200"),
    css.p(2),
    css.rounded("md"),
    css.shadow("md")
  )
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

  return (
    <CvDiv>
      <CvButton onClick={() => setShowCareer(true)}>Parcours</CvButton>
      <CvButton>Projets</CvButton>
      <CvButton>Expériences</CvButton>
      <CareerWindow
        show={showCareer}
        handleClose={() => setShowCareer(false)}
      />
    </CvDiv>
  );
};

const LaunchMenu: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const switchShowMenu = () => {
    setShowMenu(showMenu ? false : true);
  };

  return (
    <>
      <LaunchMenuDiv
      //onBlur={() => setShowMenu(false)}
      >
        <LaunchButton onClick={switchShowMenu}>Démarrer</LaunchButton>
        <LaunchContentDiv
          style={{ bottom: "2em", display: showMenu ? "" : "none" }}
        >
          <ContentHeader>
            <ContentTitle>Etienne Blanc</ContentTitle>
          </ContentHeader>
          <Cv />
        </LaunchContentDiv>
      </LaunchMenuDiv>
    </>
  );
};

export default LaunchMenu;
