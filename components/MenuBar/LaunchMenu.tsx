import React, { useState } from "react";
import { styled } from "../../styles";

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
  css.compose(css.absolute(), css.bg("gray-200"), css.p(2), css.rounded("md"))
);

const ContentHeader = styled.div((css) => css.compose());
const ContentTitle = styled.h2((css) => css.compose());

const LaunchMenu: React.FC = () => {
  const [showMenu, setShowMenu] = useState(true);

  const switchShowMenu = () => {
    setShowMenu(showMenu ? false : true);
  };

  return (
    <>
      <LaunchMenuDiv onBlur={() => setShowMenu(false)}>
        <LaunchButton onClick={switchShowMenu}>Démarrer</LaunchButton>
        <LaunchContentDiv
          style={{ bottom: "2em", display: showMenu ? "" : "none" }}
        >
          <ContentHeader>
            <ContentTitle>Etienne Blanc</ContentTitle>
          </ContentHeader>

          <p>ELEMENT</p>
          <p>ELEMENT</p>
          <p>ELEMENT</p>
          <p>ELEMENT</p>
          <p>ELEMENT</p>
          <p>ELEMENT</p>
          <p>ELEMENT</p>
          <p>ELEMENT</p>
        </LaunchContentDiv>
      </LaunchMenuDiv>
    </>
  );
};

export default LaunchMenu;
